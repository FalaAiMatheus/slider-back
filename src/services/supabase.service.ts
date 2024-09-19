import { createClient } from "@supabase/supabase-js";
import { Database } from "../core/types/database.types";
import dotenv from 'dotenv'

dotenv.config()

export const supabase = createClient<Database>(
  process.env.SUPABASE_URL ?? "",
  process.env.SUPABASE_ANON_KEY ?? ""
);
