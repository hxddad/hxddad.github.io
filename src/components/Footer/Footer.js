import React from "react";
import styled from "@emotion/styled";

const FooterSection = styled.div`
  background-image: url('https://cdnb.artstation.com/p/assets/images/images/024/538/827/original/pixel-jeff-clipa-s.gif?1582740711');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 150px;
  position: relative;

  span {
    position: absolute;
    bottom: 4rem;
    color: #fff;

    a {
      text-decoration: underline;
    }
  }
`;
function Footer() {
  return (
    <FooterSection>
      <div className="Container"/>
    </FooterSection>
  );
}

export default Footer;
