import styled from "@emotion/styled";

export const StyledSearch = styled.form`
  width: 100%;
  height: 40px;
  display: flex;
  border: 2px solid;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.color.green};
`;

export const SearchContainer = styled.input`
  ::placeholder {
    font-size: 16px;
    color: ${({ theme }) => theme.color.darkGray};
  }
  :focus {
    outline: none;
  }
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  font-size: 16px;
`;
export const SearchButton = styled.button`
  width: 45px;
  height: 35px;
  :focus {
    cursor: pointer;
  }
  border: none;
  background-color: transparent;
`;

export const SearchIconContainer = styled.img`
  width: 35px;
  height: 35px;
`;
