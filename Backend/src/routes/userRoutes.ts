import { Router } from 'express';
//import { getUsers, createUser } from '../controllers/userController';
import { createVehicle } from '../controllers/vehicle/vehicle';
import { createBusiness } from '../controllers/business/business';

const router = Router();

//router.get('/', getUsers);
//router.post('/', createUser);
// router.post('/cb',createBusiness);
router.post('/cv',createVehicle);
router.post('/b',createBusiness );
// router.post('/signup',signup)
export default router;