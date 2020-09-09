export const setPeople = (data: PeopleFetchResult): PeopleActions => {
  return {
    type: "PEOPLE_SET",
    payload: data.count,
  };
};

export const appendPeople = (data: PeopleProps[], page: number): PeopleActions => {
  const dataToState = data.map((dt) => ({ ...dt, page: page }));
  return {
    type: "PEOPLE_APPEND",
    payload: dataToState,
  };
};
