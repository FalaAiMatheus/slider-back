import { Request, Response } from "express";
import { supabase } from "../services/supabase.service";

export const getPresentations = async (req: Request, res: Response) => {
  try {
    const { data, status, error } = await supabase
      .from("presentations")
      .select("*");

    if (error) {
      return res.status(status).json({ error: error.message });
    }

    return res.status(status).json(data);
  } catch (error) {
    return res.send(error);
  }
};
