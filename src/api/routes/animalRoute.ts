import express from 'express';
import {
  deleteAnimal,
  getAnimalById,
  getAnimals,
  getAnimalsByBox,
  postAnimal,
  putAnimal,
} from '../controllers/animalController';

const router = express.Router();

router.route('/').post(postAnimal).get(getAnimals);

router.route('/location').get(getAnimalsByBox);

router.route('/:id').get(getAnimalById).delete(deleteAnimal).put(putAnimal);

export default router;
