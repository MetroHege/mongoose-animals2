import {Point} from 'geojson';
import mongoose, {Model} from 'mongoose';
import {Species} from './Species';

type Animal = {
  animal_name: string;
  birthdate: Date;
  species: mongoose.Types.ObjectId | Species;
  location: Point;
};

type AnimalModel = Model<Animal> & {
  findBySpecies: (species_name: string) => Promise<Animal[]>;
};

export {Animal, AnimalModel};
