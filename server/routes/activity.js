import express from 'express';
import { protect } from '../middleware/auth.js';
import { getRecentActivity, createActivity } from '../controllers/activity.js';

const router = express.Router();

router.use(protect);

router.route('/')
  .post(createActivity);

router.route('/recent')
  .get(getRecentActivity);

export default router;