import { Schema, model } from 'mongoose';

const ownerSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  phone: {
    type: String,
    required: [true, 'Phone is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true
  }
});

export default model('Owner', ownerSchema);
