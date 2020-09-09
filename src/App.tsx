import React, { useEffect, Fragment } from "react";

import "./style/main.scss";
import TableSection from "./components/table-section";
import useFetch from "./components/use-fetch/use-fetch.component";
import { useSelector, useDispatch } from "react-redux";
import { selectPeoplePage } from "./redux/people/people.selector";
import { setPeople } from "./redux/people/people.action";

const App: React.FC = () => {
  const peoplePage = useSelector(selectPeoplePage);

  const dispatch = useDispatch();

  const res = useFetch("https://swapi.dev/api/people/");

  useEffect(() => {
    if (peoplePage === 0 && res.response) {
      dispatch(setPeople(res.response));
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [res]);

  return (
    <Fragment>
      <TableSection />
    </Fragment>
  );
};

export default App;
