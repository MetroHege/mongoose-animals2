import express from 'express';
import {
  deleteSpecies,
  getSpecies,
  getSpeciesById,
  postSpecies,
  putSpecies,
} from '../controllers/speciesController';

const router = express.Router();

router.route('/').post(postSpecies).get(getSpecies);
router.route('/:id').get(getSpeciesById).delete(deleteSpecies).put(putSpecies);

export default router;
