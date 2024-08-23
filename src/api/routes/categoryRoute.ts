import express from 'express';
import {
  deleteCategory,
  getCategories,
  getCategory,
  postCategory,
  putCategory,
} from '../controllers/categoryController';

const router = express.Router();

router.route('/').post(postCategory).get(getCategories);
router.route('/:id').get(getCategory).delete(deleteCategory).put(putCategory);

export default router;
