import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import FoodHeader from "../images/food-header.jpg";
import LogoImg from "../images/logo.png";
import styled from "styled-components";
import Search from "./Search";

const Logo = styled.div`
  padding: 40px 30px;
  img {
    max-width: 100px;
  }
`;

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `url(${FoodHeader})`,
      "background-size": `cover`,
      "background-position": "center ",
      marginBottom: `1.45rem`,
      "min-height": `600px`
    }}
  >
    <Logo>
      <a href="#">
        <img src={LogoImg} />
      </a>
    </Logo>
    <Search />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
