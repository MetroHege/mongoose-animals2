import mongoose from 'mongoose';
import {Species} from '../../types/Species';

const speciesSchema = new mongoose.Schema<Species>({
  species_name: {
    type: String,
    required: true,
    unique: true,
    minlength: 2,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

export default mongoose.model<Species>('Species', speciesSchema);
