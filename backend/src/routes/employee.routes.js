import express from 'express';

import {
    getAllEmployee,
    getEmployee,
    createEmployee,
    deleteEmployee,
    updateEmployee
} from '../controllers/employee.controller.js';

const employeeRouter = express.Router();


employeeRouter.get('/employees', getAllEmployee);


employeeRouter.get('/employee/:empId', getEmployee);


employeeRouter.post('/employee', createEmployee);


employeeRouter.delete('/employee/:empId', deleteEmployee);


employeeRouter.put('/employee/:empId', updateEmployee);

export default employeeRouter;


