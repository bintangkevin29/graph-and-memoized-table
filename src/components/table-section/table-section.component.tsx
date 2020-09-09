import React from "react";

import Section from "../section";
import SectionHeader from "../section-header";
import { Table, Pagination } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectPeople, selectPeoplePage } from "../../redux/people/people.selector";

import "./table-section.style.scss";

const TableSection: React.FC = () => {
  const people = useSelector(selectPeople);
  const totalPages = useSelector(selectPeoplePage);

  const pages = [];

  for (let i = 0; i < totalPages; i++) {
    pages.push(<Pagination.Item>{i + 1}</Pagination.Item>);
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
          {people.map((p, i) => (
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
