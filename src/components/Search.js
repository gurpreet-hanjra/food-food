import React from "react";
import styled from "styled-components";
import Button from "./Button";

const SearchContainer = styled.div`
  background: white;
  padding: 20px;
  max-width: 700px;
  margin: 0 auto;
  box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.7);
`;

const Input = styled.input`
  height: 46px;
  padding: 10px;
  margin: 0;
  float: left;
  width: calc(100% - 145px);
  margin-right: 15px;
  border: 1px solid #ccc;
`;

export default class Search extends React.Component {
  render() {
    return (
      <SearchContainer>
        <Input type="text" placeholder="Address, i.e. Kirchstraße 1" />
        <Button>Delivery</Button>
      </SearchContainer>
    );
  }
}
