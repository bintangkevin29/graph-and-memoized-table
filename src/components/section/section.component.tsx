import React, { ReactNode } from "react";

import "./section.style.scss";
import { Container } from "react-bootstrap";

interface Props {
  className?: string;
  children: ReactNode;
}

const Section: React.FC<Props> = ({ className, children }) => {
  return (
    <section className={`section ${className}`}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
