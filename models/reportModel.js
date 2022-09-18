import mongoose from 'mongoose';
import joi from 'joi';

const reportSchema = new mongoose.Schema(
  {
    name: { type: String, required: false, default: 'Anonymous' },
    email: { type: String, required: false, default: 'anonymous@anonym.com' },
    contact: { type: Number, required: false, default: 0 },
    location: { type: String, required: true },
    description: { type: String, required: true },
    accusedDetails: { type: String, required: true },
    status: { type: String, default: 'Pending' },
    isResolved: { type: Boolean, default: false },
    note: { type: String, default: '' },
  },
  { timestamps: true }
);

const Report = mongoose.model('report', reportSchema);

const validate = (data) => {
  const schema = joi.object({
    name: joi.string().label('Name'),
    email: joi.string().email().label('Email'),
    contact: joi.number().required().label('Contact'),
    location: joi.string().required().label('Location'),
    description: joi.string().required().label('Description'),
    accusedDetails: joi.string().required().label('Accused Details'),
    status: joi.string().label('Status'),
    isResolved: joi.boolean().label('Is Resolved'),
    note: joi.string().label('note'),
  });
  return schema.validate(data);
};

export { Report, validate };
