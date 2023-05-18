import styled from "@emotion/styled";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 368px;
  width: 360px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 30px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 360px;
  height: 172px;
  object-fit: cover;
  `;


export const PostTitleContainer = styled.div`
  font-weight: 500;
  font-size: 30px;
  margin-left: 23px;
  margin-top: 25px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const PostAuthorContainer = styled.div`
  display: flex;
`;

export const Author = styled.div`
  color: #8DC63F;
  font-weight: 500;
  font-size: 18px;
  margin-left: 23px;
`

export const Nickname = styled.div`
  font-weight: 500;
  font-size: 18px;
  margin-left: 8px;
`

export const StatusContainer = styled.div`
  margin-left: 23px;
  margin-top: 15px;
  display: flex;
`;

export const CreatedAt = styled.div`
  margin-right: 34px;
  font-weight: 500;
  font-size: 15px;
  color: #808080;
`;

export const Like = styled.img`
  width: 42px;
`;

export const LikePriceContainer = styled.div`
  margin-left: 23px;
  margin-top: 15px;
  display: flex;
  align-items: end;
`;

export const Price = styled.div`
  color: #000000;
  margin-left: 180px;
  font-weight: 500;
  font-size: 25px;
`;