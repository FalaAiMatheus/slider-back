import { Request, Response } from "express";
import { supabase } from "../services/supabase.service";

export const getPresentations = async (res: Response, req: Request) => {
  try {
    const { data, status } = await supabase.from("presentations").select("*");

    return res.status(status).json(data);
  } catch (error) {
    console.error(error);
  }
};
