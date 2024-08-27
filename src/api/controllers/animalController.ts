import {Request, Response, NextFunction} from 'express'; // Import the correct types for Request, Response, and NextFunction

import CustomError from '../../classes/CustomError';
import {Animal} from '../../types/Animal';
import {MessageResponse} from '../../types/Messages';
import animalModel from '../models/animalModel';

type DBMessageResponse = MessageResponse & {
  data: Animal | Animal[];
};

const postAnimal = async (
  req: Request<{}, {}, Animal>,
  res: Response<DBMessageResponse>,
  next: NextFunction,
) => {
  try {
    const newAnimal = new animalModel(req.body);
    const savedAnimal = await newAnimal.save();

    res.json({
      message: 'Animal saved successfully',
      data: savedAnimal,
    });
  } catch (error) {
    next(new CustomError((error as Error).message, 500));
  }
};

const getAnimals = async (
  req: Request,
  res: Response<DBMessageResponse>,
  next: NextFunction,
) => {
  try {
    const animals = await animalModel.find();

    res.json({
      message: 'Animals fetched successfully',
      data: animals,
    });
  } catch (error) {
    next(new CustomError((error as Error).message, 500));
  }
};

const getAnimalById = async (
  req: Request<{id: string}>,
  res: Response<DBMessageResponse>,
  next: NextFunction,
) => {
  try {
    const animal = await animalModel.findById(req.params.id);

    if (!animal) {
      return next(new CustomError('Animal not found', 404));
    }

    res.json({
      message: 'Animal fetched successfully',
      data: animal,
    });
  } catch (error) {
    next(new CustomError((error as Error).message, 500));
  }
};

const putAnimal = async (
  req: Request<{id: string}, {}, Animal>,
  res: Response<DBMessageResponse>,
  next: NextFunction,
) => {
  try {
    const updatedAnimal = await animalModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new: true},
    );

    if (!updatedAnimal) {
      return next(new CustomError('Animal not found', 404));
    }

    res.json({
      message: 'Animal updated successfully',
      data: updatedAnimal,
    });
  } catch (error) {
    next(new CustomError((error as Error).message, 500));
  }
};

const deleteAnimal = async (
  req: Request<{id: string}>,
  res: Response<DBMessageResponse>,
  next: NextFunction,
) => {
  try {
    const deletedAnimal = await animalModel.findByIdAndDelete(req.params.id);

    if (!deletedAnimal) {
      return next(new CustomError('Animal not found', 404));
    }

    res.json({
      message: 'Animal deleted successfully',
      data: deletedAnimal,
    });
  } catch (error) {
    next(new CustomError((error as Error).message, 500));
  }
};

export {postAnimal, getAnimals, getAnimalById, putAnimal, deleteAnimal};
