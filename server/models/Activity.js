import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['appointment', 'prescription', 'lab'],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  relatedId: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'onModel',
    required: true
  },
  onModel: {
    type: String,
    enum: ['Appointment', 'Prescription', 'MedicalHistory'],
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model('Activity', activitySchema);