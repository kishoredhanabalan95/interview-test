import express from 'express';
const testRoutes = express.Router();
import {
  getMockedData
} from '../controllers/testController';

testRoutes.get('', getMockedData);

export default testRoutes;