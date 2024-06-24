import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Create a new vehicle
export const createVehicle = async (req: Request, res: Response) => {
  const { userId, type, make, model, year, milagePerWeek, licenceDate, insuranceDate, lastServiceDate, batteryCondition } = req.body;

  try {
    const vehicle = await prisma.vehicle.create({
      data: {
        user: { connect: { id: userId } }, // Connect to the user by userId
        type: type,
        make: make,
        model: model,
        year: year,
        milagePerWeek: milagePerWeek,
        licenceDate: licenceDate,
        insuranceDate: insuranceDate,
        lastServiceDate: lastServiceDate,
        batteryCondition: batteryCondition,
      },
    });

    res.status(201).json(vehicle);
  } catch (error) {
    console.error('Error creating vehicle:', error);
    res.status(500).json({ error: 'Failed to create vehicle' });
  }
};
