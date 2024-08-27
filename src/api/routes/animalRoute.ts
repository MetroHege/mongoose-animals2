import express from 'express';
import {
  deleteAnimal,
  getAnimalById,
  getAnimals,
  getAnimalsInLocation,
  postAnimal,
  putAnimal,
} from '../controllers/animalController';

const router = express.Router();

router.route('/').post(postAnimal).get(getAnimals).get(getAnimalsInLocation);
router.route('/:id').get(getAnimalById).delete(deleteAnimal).put(putAnimal);

export default router;
