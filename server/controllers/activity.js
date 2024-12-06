import Activity from '../models/Activity.js';
import asyncHandler from '../utils/asyncHandler.js';

export const getRecentActivity = asyncHandler(async (req, res) => {
  const activities = await Activity.find({ doctor: req.user.id })
    .populate('patient', 'name')
    .sort({ createdAt: -1 })
    .limit(10);

  res.json(activities);
});

export const createActivity = asyncHandler(async (req, res) => {
  const activity = await Activity.create({
    ...req.body,
    doctor: req.user.id
  });

  await activity.populate('patient', 'name');
  res.status(201).json(activity);
});