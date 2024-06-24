import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { hashSync } from 'bcrypt';

const prisma = new PrismaClient();

export const signup = async (req: Request, res: Response) => {
  const { firstName, lastName, userName, password, email, phoneNo, province, district, vehicles, sellers, SparePart, Service } = req.body;
  console.log('Request Body:', req.body);
  try {
    // Check if email already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ error: 'Email already in use' });
    }

    // Create new user
    const hashedPassword = hashSync(password, 10);
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        userName,
        password: hashedPassword,
        email,
        phoneNo,
        province,
        district,
        vehicles: { create: vehicles },
        sellers: { create: sellers },
        spareParts: { create: SparePart },
        services: { create: Service }
      },
    });

    // Respond with user data
    res.status(201).json({ user });

  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
};
