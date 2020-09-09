const INIT_STATE: PeopleState = {
  people: [],
  total: 0,
};

const peopleReducer = (state = INIT_STATE, action: PeopleActions): PeopleState => {
  switch (action.type) {
    case "PEOPLE_SET":
      return { ...state, total: action.payload };
    case "PEOPLE_APPEND":
      return { ...state, people: [...action.payload, ...state.people] };
    default:
      return state;
  }
};

export default peopleReducer;
