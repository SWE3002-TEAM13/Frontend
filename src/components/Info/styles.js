import styled from "@emotion/styled";

export const NavigationContainer = styled.div`
  padding: 10px;
  width: 100%;
  height: 40px;
  background-color: red;
`;

export const InfoContainer = styled.div`
  width: 100%;
  min-height: 200px;
  padding: 10px 30px;
  background-color: ${({ theme }) => theme.color.white};
`;

export const PhotoContainer = styled.div`
  width: 100%;
  min-height: 300px;
  background-color: ${({ theme }) => theme.color.gray};
`;

export const ConetentsContainer = styled.div`
  width: 100%;
  min-height: 200px;
  background-color: ${({ theme }) => theme.color.white};
`;

export const InfoTitleAndLikeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
`;

export const InfoTitleContainer = styled.div`
  width: 100%;
  min-width: max-content;
  font-size: 25px;
`;

export const PostAuthorContainer = styled.div`
  font-size: 8px;
  font-weight: lighter;
  color: ${({ theme }) => theme.color.darkGray};
`;

export const PostDateContainer = styled.div`
  font-size: 8px;
  font-weight: lighter;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.color.darkGray};
`;

export const StateAndPriceContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  column-gap: 10px;
  bottom: 0px;
`;

export const PriceTextContainer = styled.div`
  min-width: max-content;
  font-size: 16px;
`;
