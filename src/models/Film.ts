import { Collection } from "./Collection";
import { Company } from "./Company";
import { Country } from "./Country";
import { Genre } from "./Genre";
import { Language } from "./Language";

export interface Film {
  id: number;
  adult: boolean | null;
  backdrop_path: string;
  belongs_to_collection: Collection;
  budget: number;
  genres: Genre[];
  homepage: string;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Company[];
  production_countries: Country[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Language[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  price: number;
}
