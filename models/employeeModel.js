import { Schema, model } from 'mongoose';

const employeeSchema = new Schema({
  documentNumber: {
    type: String,
    required: true
  },
  names: {
    type: String,
    required: true
  },
  dateEntry: {
    type: Date,
    required: true
  },
  dateRetire: Date,
  salary: {
    type: Number,
    required: true
  },
  daysWorked: Number,
  severancePay: Number
});

export default model('Employee', employeeSchema);
