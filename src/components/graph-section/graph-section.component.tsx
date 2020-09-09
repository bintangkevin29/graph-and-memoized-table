import React from "react";
import Section from "../section";
import SectionHeader from "../section-header";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";
import { useSelector } from "react-redux";
import { selectPeople } from "../../redux/people/people.selector";

import "./graph-section.style.scss";

const GraphSection: React.FC = () => {
  const data = useSelector(selectPeople);
  const chartData = data.map((d) => ({ name: d.name, Height: d.height, Weight: d.mass }));

  return (
    <Section className="graphSection">
      <SectionHeader>Graph</SectionHeader>
      <BarChart width={730} height={250} data={chartData}>
        <CartesianGrid strokeDasharray="10 10" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Height" fill="#8884d8" />
        <Bar dataKey="Weight" fill="#82ca9d" />
      </BarChart>
    </Section>
  );
};

export default GraphSection;
