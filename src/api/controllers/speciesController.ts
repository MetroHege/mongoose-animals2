import {Request, Response, NextFunction} from 'express'; // Import the correct types for Request, Response, and NextFunction

import CustomError from '../../classes/CustomError';
import {MessageResponse} from '../../types/Messages';
import {Species} from '../../types/Species';
import speciesModel from '../models/speciesModel';

type DBMessageResponse = MessageResponse & {
  data: Species | Species[];
};

const postSpecies = async (
  req: Request<{}, {}, Species>,
  res: Response<DBMessageResponse>,
  next: NextFunction,
) => {
  try {
    const newSpecies = new speciesModel(req.body);
    const savedSpecies = await newSpecies.save();

    res.json({
      message: 'Species saved successfully',
      data: savedSpecies,
    });
  } catch (error) {
    next(new CustomError((error as Error).message, 500));
  }
};

const getSpecies = async (
  req: Request,
  res: Response<DBMessageResponse>,
  next: NextFunction,
) => {
  try {
    const species = await speciesModel.find();

    res.json({
      message: 'Species fetched successfully',
      data: species,
    });
  } catch (error) {
    next(new CustomError((error as Error).message, 500));
  }
};

const getSpeciesById = async (
  req: Request<{id: string}>,
  res: Response<DBMessageResponse>,
  next: NextFunction,
) => {
  try {
    const species = await speciesModel.findById(req.params.id);

    if (!species) {
      return next(new CustomError('Species not found', 404));
    }

    res.json({
      message: 'Species fetched successfully',
      data: species,
    });
  } catch (error) {
    next(new CustomError((error as Error).message, 500));
  }
};

const putSpecies = async (
  req: Request<{id: string}, {}, Species>,
  res: Response<DBMessageResponse>,
  next: NextFunction,
) => {
  try {
    const species = await speciesModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new: true},
    );

    if (!species) {
      return next(new CustomError('Species not found', 404));
    }

    res.json({
      message: 'Species updated successfully',
      data: species,
    });
  } catch (error) {
    next(new CustomError((error as Error).message, 500));
  }
};

const deleteSpecies = async (
  req: Request<{id: string}>,
  res: Response<DBMessageResponse>,
  next: NextFunction,
) => {
  try {
    const species = await speciesModel.findByIdAndDelete(req.params.id);

    if (!species) {
      return next(new CustomError('Species not found', 404));
    }

    res.json({
      message: 'Species deleted successfully',
      data: species,
    });
  } catch (error) {
    next(new CustomError((error as Error).message, 500));
  }
};

export {postSpecies, getSpecies, getSpeciesById, putSpecies, deleteSpecies};
