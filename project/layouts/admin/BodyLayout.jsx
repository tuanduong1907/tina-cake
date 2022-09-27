import React from "react";
import HeaderMenuAdmin from "../../components/admin/HeaderMenuAdmin";
import styled from "styled-components";

const BodyLayoutStyles = styled.div`
    flex: 1;
`

const BodyLayout = ({ heading = "", children }) => {
  return (
    <BodyLayoutStyles>
      <HeaderMenuAdmin heading={heading}></HeaderMenuAdmin>
      {children}
    </BodyLayoutStyles>
  );
};

export default BodyLayout;
