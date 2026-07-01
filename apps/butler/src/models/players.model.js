import mongoose from 'mongoose';

// 1. Define the structural blueprint of your data
const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  age: {
    type: Number,
    default: 18
  }
}, {
  // 2. Automatically adds 'createdAt' and 'updatedAt' fields
  timestamps: true 
});

// 3. Compile the schema into a reusable Model
const Player = mongoose.model('Player', playerSchema);

// 4. Export it to use in other files
export default Player;