interface PeopleState {
  people: PeopleProps[];
  total: int;
  currentPage: PeopleProps[];
}

interface PeopleProps {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
  page: number;
}

type PeopleActions =
  | {
      type: "PEOPLE_SET";
      payload: number;
    }
  | {
      type: "PEOPLE_APPEND";
      payload: PeopleProps[];
    }
  | {
      type: "PEOPLE_SET_CURRENT_PAGE";
      payload: PeopleProps[];
    };

interface PeopleFetchResult {
  count: number;
  next?: string;
  previous?: string;
  results: PeopleProps[];
}
