const INIT_STATE: PeopleState = {
  people: [],
  total: 0,
};

const peopleReducer = (state = INIT_STATE, action: PeopleActions): PeopleState => {
  switch (action.type) {
    case "PEOPLE_SET":
      return { ...state, people: action.payload.people, total: action.payload.total };
    default:
      return state;
  }
};

export default peopleReducer;
