import React, { useEffect } from "react";

import "./style/main.scss";
import TableSection from "./components/table-section";
import useFetch from "./components/use-fetch/use-fetch.component";
import { useSelector, useDispatch } from "react-redux";
import { selectPeople } from "./redux/people/people.selector";
import { setPeople } from "./redux/people/people.action";

const App: React.FC = () => {
  const people = useSelector(selectPeople);

  const dispatch = useDispatch();

  const res = useFetch("https://swapi.dev/api/people/");

  useEffect(() => {
    if (people.length === 0 && res.response) {
      dispatch(setPeople(res.response));
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [res]);

  return <TableSection />;
};

export default App;
