import axios from "axios";
import { Duty } from "../types";

const API_URL = "http://localhost:4000/api/duties";

export const fetchDuties = async (): Promise<Duty[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createDuty = async (name: string): Promise<Duty> => {
  const response = await axios.post(API_URL, { name });
  return response.data;
};

export const updateDuty = async (id: string, name: string): Promise<Duty> => {
  const response = await axios.put(`${API_URL}/${id}`, { name });
  return response.data;
};
