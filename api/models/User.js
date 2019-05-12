import mongoose, { Schema } from 'mongoose';

/**
 * The user schema
 */
const userSchema = Schema({
  email: String,
  addressLine1: String,
  addressLine2: String,
  city: String,
  zipCode: String,
  phoneNumber: String,
  firstName: String,
  lastName: String,
  state: String,
  dateOfBirth: Date,
  userName: {
    type: String,
    required: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
  created: {
    type: Date, default: Date.now,
  },
},

{
  versionKey: false,
});

/**
 * Exports the mongoose model of user schema.
 */
export default mongoose.model('user', userSchema);
