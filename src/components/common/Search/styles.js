import styled from "@emotion/styled";

export const StyledSearch = styled.div`
  width: 250px;
  height: 30px;
  display: flex;
  border: 2px solid;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.color.green};
`;

export const SearchContainer = styled.input`
  ::placeholder {
    font-size: 10px;
    color: ${({ theme }) => theme.color.darkGray};
  }
  :focus {
    outline: none;
  }
  background-color: transparent;
  width: 220px;
  height: 100%;
  padding: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  font-size: 12px;
`;

export const SearchIconContainer = styled.img`
  width: 25px;
  height: 25px;
`;
