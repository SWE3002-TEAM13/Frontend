import React from 'react';
import styled from '@emotion/styled';

function TextInput({ type, placeholder, width, onChange, value, onKeyDown }) {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      width={width}
      onChange={onChange}
      value={value}
      onKeyDown={onKeyDown}
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
  border-color: #c4c4c4;
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
