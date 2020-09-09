export const setPeople = (data: PeopleFetchResult): PeopleActions => {
  const dataToState = data.results.map((dt) => ({ ...dt, page: 1 }));
  return {
    type: "PEOPLE_SET",
    payload: {
      people: dataToState,
      total: data.count,
    },
  };
};
