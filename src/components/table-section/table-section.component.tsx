import React, { useState, useEffect, useMemo } from "react";

import Section from "../section";
import SectionHeader from "../section-header";
import { Table, Pagination } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  selectPeople,
  selectPeoplePage,
  selectCurrentPeoplePage,
} from "../../redux/people/people.selector";

import "./table-section.style.scss";
import useFetch from "../use-fetch/use-fetch.component";
import { appendPeople, setPeopleCurrentPage } from "../../redux/people/people.action";

const TableSection: React.FC = () => {
  const people = useSelector(selectPeople);
  const totalPages = useSelector(selectPeoplePage);

  const peoplePage = useSelector(selectCurrentPeoplePage);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const isPageExist = people.find((p) => p.page === page);
  const shouldPageExist = isPageExist === undefined;

  const memoizedPageValue = useMemo(
    () => page,
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [shouldPageExist]
  );

  const res = useFetch(`https://swapi.dev/api/people/?page=${memoizedPageValue}`);

  useEffect(() => {
    if (res.response && !isPageExist) {
      dispatch(appendPeople(res.response.results, page));
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [res.response]);

  useEffect(() => {
    dispatch(setPeopleCurrentPage(people.filter((p) => p.page === page)));
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, people]);

  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <Pagination.Item key={i} onClick={() => setPage(i)}>
        {i}
      </Pagination.Item>
    );
  }

  return (
    <Section className="tableSection">
      <SectionHeader>Table</SectionHeader>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Hair Color</th>
            <th>Skin Color</th>
          </tr>
        </thead>
        <tbody>
          {peoplePage.map((p, i) => (
            <tr key={i}>
              <td>{p.name}</td>
              <td>{p.height}</td>
              <td>{p.mass}</td>
              <td>{p.hair_color}</td>
              <td>{p.skin_color}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="tableSection__pagination">
        <Pagination>{pages}</Pagination>
      </div>
    </Section>
  );
};

export default TableSection;
