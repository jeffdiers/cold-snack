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
  facebookId: String,
  totalPoints: {
    type: Number,
    default: 0,
  },
  points: {
    type: Number,
    default: 0,
  },
  hashedPassword: {
    type: String,
    required: false, // default is true. form needs field for password
  },
  salt: {
    type: String,
    required: false, // default is true. form needs field for password
  },
  created: {
    type: Date, default: Date.now,
  },
  picture: {
    type: mongoose.Schema.Types.Mixed,
    default: '/users/default-avatar.jpg',
  },
},

{
  versionKey: false,
});

/**
 * Exports the mongoose model of user schema.
 */
export default mongoose.model('user', userSchema);
