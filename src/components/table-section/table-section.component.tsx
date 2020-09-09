import React from "react";

import Section from "../section";
import SectionHeader from "../section-header";
import { Table } from "react-bootstrap";

const TableSection: React.FC = () => {
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
          <tr>
            <td>Tist</td>
            <td>Tist</td>
            <td>Tist</td>
            <td>Tist</td>
            <td>Tist</td>
          </tr>
        </tbody>
      </Table>
    </Section>
  );
};

export default TableSection;
