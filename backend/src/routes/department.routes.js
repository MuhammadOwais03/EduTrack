import express from 'express';
import {
    getAllDepartment,
    getDepartment,
    createDepartment,
    deleteDepartment,
    updatedDepartment
} from '../controllers/department.controller.js';

import nullReferenceDepartmentAttribute from '../middlewares/departmentDelete.middleware.js'

const departmentRouter = express.Router();

// Route to get all departments
departmentRouter.get('/departments', getAllDepartment);

// Route to get a specific department by ID
departmentRouter.get('/department/:deptId', getDepartment);

// Route to create a new department
departmentRouter.post('/department', createDepartment);

// Route to delete a department by ID
departmentRouter.delete('/department/:deptId', [nullReferenceDepartmentAttribute] ,deleteDepartment);

// Route to update a department by ID
departmentRouter.put('/department/:deptId', updatedDepartment);

export default departmentRouter;
