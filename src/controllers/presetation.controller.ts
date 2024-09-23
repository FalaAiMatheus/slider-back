import { Request, Response } from "express";
import { Presentation } from "../core/interfaces";
import { supabase } from "../services/supabase.service";

export class PresentationController implements Presentation {
  name: string;
  description: string;
  locale: string;
  date: string;
  slug?: string;
  created_at?: string;
  updated_at?: string;

  constructor() {
    this.name = "";
    this.description = "";
    this.locale = "";
    this.date = "";
  }

  async getPresentations(req: Request, res: Response) {
    try {
      const { data: presentation, status } = await supabase
        .from("presentations")
        .select("*");

      return res.status(status).json(presentation);
    } catch (error) {
      return res.send(error);
    }
  }
  async getPresentation(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { data: presentation } = await supabase
        .from("presentations")
        .select("*")
        .eq("id", id)
        .single();

      if (!!id === !presentation?.id) {
        return res.status(404).json({
          status: 404,
          message: "Id não existe ou não foi digitado corretamente",
        });
      }

      return res.status(200).json(presentation);
    } catch (error) {
      return res.send(error);
    }
  }
}
