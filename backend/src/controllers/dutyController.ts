import { Request, Response } from "express";
import { getDuties, addDuty, updateDuty } from "../models/dutyModel";

export const getAllDuties = async (req: Request, res: Response) => {
  try {
    const duties = await getDuties();
    res.json(duties);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

export const createDuty = async (req: Request, res: Response) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send("Name is required");
  }

  try {
    const newDuty = await addDuty(name);
    res.status(201).json(newDuty);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

export const updateDutyById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    return res.status(400).send("Name is required");
  }

  try {
    const updatedDuty = await updateDuty(Number(id), name);
    if (!updatedDuty) {
      return res.status(404).send("Duty not found");
    }
    res.json(updatedDuty);
  } catch (err) {
    res.status(500).send("Server error");
  }
};
