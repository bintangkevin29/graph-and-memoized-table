import React from "react";

import "./section-header.style.scss";

const SectionHeader: React.FC = ({ children }) => {
  return <span className="sectionHeader">{children}</span>;
};

export default SectionHeader;
