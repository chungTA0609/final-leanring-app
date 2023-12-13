// src/App.test.tsx
import { render, screen } from "@testing-library/react";
import CartItem from "./CartItem";
import { Film } from "../models/Film";
import { CartProduct } from "../models/CartProduct";
import { MemoryRouter } from "react-router-dom";

const cartFilm: CartProduct = {
  product: {
    adult: false,
    backdrop_path: "/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg",
    belongs_to_collection: {
      id: 809185,
      name: "Army of the Dead Collection",
      poster_path: null,
      backdrop_path: null,
    },
    budget: 200000000,
    genres: [
      {
        id: 35,
        name: "Comedy",
      },
      {
        id: 80,
        name: "Crime",
      },
    ],
    homepage: "https://movies.disney.com/cruella",
    id: 337404,
    imdb_id: "tt3228774",
    original_language: "en",
    original_title: "Cruella",
    overview:
      "In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.",
    popularity: 6107.84,
    poster_path: "/hjS9mH8KvRiGHgjk6VUZH7OT0Ng.jpg",
    production_companies: [
      {
        id: 2,
        logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
        name: "Walt Disney Pictures",
        origin_country: "US",
      },
    ],
    production_countries: [
      {
        iso_3166_1: "US",
        name: "United States of America",
      },
    ],
    release_date: "2021-05-26",
    revenue: 42600000,
    runtime: 134,
    spoken_languages: [
      {
        english_name: "English",
        iso_639_1: "en",
        name: "English",
      },
    ],
    status: "Released",
    tagline: "Hello Cruel World",
    title: "Cruella",
    video: false,
    vote_average: 8.8,
    price: 8.8,
    vote_count: 1474,
  },
  quantity: 1,
};
const film: Film = {
  adult: false,
  backdrop_path: "/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg",
  belongs_to_collection: {
    id: 809185,
    name: "Army of the Dead Collection",
    poster_path: null,
    backdrop_path: null,
  },
  budget: 200000000,
  genres: [
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
  ],
  homepage: "https://movies.disney.com/cruella",
  id: 337404,
  imdb_id: "tt3228774",
  original_language: "en",
  original_title: "Cruella",
  overview:
    "In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.",
  popularity: 6107.84,
  poster_path: "/hjS9mH8KvRiGHgjk6VUZH7OT0Ng.jpg",
  production_companies: [
    {
      id: 2,
      logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
      name: "Walt Disney Pictures",
      origin_country: "US",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  release_date: "2021-05-26",
  revenue: 42600000,
  runtime: 134,
  spoken_languages: [
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
  ],
  status: "Released",
  tagline: "Hello Cruel World",
  title: "Cruella",
  video: false,
  vote_average: 8.8,
  price: 8.8,
  vote_count: 1474,
};
test("renders hello message", () => {
  render(
    <MemoryRouter>
      <CartItem film={film} cartFilm={cartFilm} />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/41/i);
  expect(linkElement).toBeTruthy();
});
