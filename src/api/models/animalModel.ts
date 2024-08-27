import mongoose from 'mongoose';
import {Animal} from '../../types/Animal';

const animalSchema = new mongoose.Schema<Animal>({
  animal_name: {
    type: String,
    required: true,
    unique: true,
    minlength: 2,
  },
  birthdate: {
    type: Date,
    required: true,
  },
  species: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Species',
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

animalSchema.statics.findBySpecies = function (
  species: string,
): Promise<Animal[]> {
  return this.find({species}).exec();
};

export default mongoose.model<Animal>('Animal', animalSchema);
