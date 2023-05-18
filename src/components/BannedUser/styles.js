import styled from "styled-components";

export const CardDiv = styled.div`
  width: 220px;
  height: 220px;
  align-items: center;
  background: white;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const ProfileImg = styled.div`
  margin-top: 10px;
  width: 100px;
  height: 100px;
  background: ${({ imgUrl }) => `url(${imgUrl})`};
  background-size: cover;
  background-position: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 30px;
`;

export const ProfileName = styled.div`
  margin-top: 14px;
  font-size: 20px;
  font-weight: normal;
  color: black;
`;

export const Button = styled.button`
  margin-top: 20px;
  border: none;
  width: 200px;
  height: 40px;
  color: white;
  font-size: 18px;
  background: #ff6c0f;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
