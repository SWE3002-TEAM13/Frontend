import React from "react";
import styled from "@emotion/styled";

function TextInput({ type, placeholder, width, onChange, value }) {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      width={width}
      onChange={onChange}
      value={value}
    />
  );
}

export default TextInput;

const StyledInput = styled.input`
  width: ${({ width }) => width};
  height: 50px;
  display: flex;
  border: 2px solid;
  border-radius: 5px;
  border-color: #C4C4C4;
  padding: 5px;
  font-size: 25px;

  ::placeholder {
    font-size: 25px;
    color: ${({ theme }) => theme.color.lightGray};
  }

  :focus {
    outline: none;
  }
`;
