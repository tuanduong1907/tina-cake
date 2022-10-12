import React from "react";
import HeaderMenuAdmin from "../../components/admin/HeaderMenuAdmin";
import styled from "styled-components";

const BodyLayoutStyles = styled.div`
  flex: 1;
  overflow-x: hidden;
`;

const BodyLayout = ({ heading = "", children, writePost }) => {
  return (
    <BodyLayoutStyles>
      <HeaderMenuAdmin
        heading={heading}
        writePost={writePost}
      ></HeaderMenuAdmin>
      {children}
    </BodyLayoutStyles>
  );
};

export default BodyLayout;
