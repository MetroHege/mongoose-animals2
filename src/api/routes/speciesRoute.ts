import express from 'express';
import {
  deleteSpecies,
  getSpecies,
  postSpecies,
  putSpecies,
} from '../controllers/speciesController';

const router = express.Router();

router.route('/').post(postSpecies).get(getSpecies);
router.route('/:id').get(getSpecies).delete(deleteSpecies).put(putSpecies);

export default router;
