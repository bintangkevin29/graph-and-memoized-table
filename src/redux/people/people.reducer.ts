const INIT_STATE: PeopleState = {
  people: [],
  total: 0,
  currentPage: [],
};

const peopleReducer = (state = INIT_STATE, action: PeopleActions): PeopleState => {
  switch (action.type) {
    case "PEOPLE_SET":
      return { ...state, total: action.payload };
    case "PEOPLE_APPEND":
      return { ...state, people: [...action.payload, ...state.people] };
    case "PEOPLE_SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

export default peopleReducer;
