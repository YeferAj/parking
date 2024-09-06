import { Router } from 'express';
import { getEmployees, postEmployee, putEmployee } from '../controllers/employeeController.js';

const router = Router();

router.get('/', getEmployees);
router.post('/', postEmployee);
router.put('/:id', putEmployee);

export default router;
