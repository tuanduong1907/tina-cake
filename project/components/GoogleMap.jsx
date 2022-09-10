import React from "react";
import styled from "styled-components";

const GoogleMapStyles = styled.div`
  iframe {
    width: 100%;
    height: 500px;
  }
`;

const GoogleMap = () => {
  return (
    <GoogleMapStyles>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.131981166687!2d109.18536101532189!3d12.23934173383218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317067bd70765427%3A0xcab555b4ef08718b!2sB%C3%A1nh%20Kem%20Nha%20Trang%20Tina!5e0!3m2!1svi!2s!4v1662771685015!5m2!1svi!2s"
        style={{ border: 0 }}
        height="auto"
        width="auto"
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </GoogleMapStyles>
  );
};

export default GoogleMap;
