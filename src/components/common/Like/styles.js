import styled from "@emotion/styled";

export const LikeContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 30px;
  text-align: center;
  align-items: center;
  font-weight: bolder;
  column-gap: 5px;
  max-width: max-content;
`;

export const LikeNumber = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.color.heart};
`;

export const LikeIconContainer = styled.img`
  :focus {
    cursor: pointer;
  }
  width: 25px;
  height: 25px;
`;
