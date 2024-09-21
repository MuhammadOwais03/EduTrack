import express from 'express';

import {
    getAllDesignation
} from '../controllers/designation.controller.js';

const designationRouter = express.Router();

designationRouter.get('/designations', getAllDesignation);

export default designationRouter;