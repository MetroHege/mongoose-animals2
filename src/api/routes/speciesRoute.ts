import express from 'express';
import {
  deleteSpecies,
  getSpecies,
  getSpeciesById,
  postSpecies,
  putSpecies,
} from '../controllers/speciesController';
import {addImageToSpecies} from '../../middlewares';

const router = express.Router();

router.route('/').post(postSpecies, addImageToSpecies).get(getSpecies);
router.route('/:id').get(getSpeciesById).delete(deleteSpecies).put(putSpecies);

export default router;
