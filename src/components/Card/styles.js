import styled from "@emotion/styled";

export const CardContainer = styled.div`
  display: flex;
  height: 120px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 5px 5px -5px gray;
  overflow: hidden;
`;

export const ImgContainer = styled.div`
  height: 120px;
  width: 120px;
  min-width: 120px;
  font-size: 12px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.gray};
`;

export const ImageShow = styled.img`
  width: 120px;
  height: 120px;
`;

export const ContentContainer = styled.div`
  height: 120px;
  width: 100%;
  padding: 15px;
  row-gap: 7px;
`;

export const PostTitleAndLikeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
`;

export const PostTitleContainer = styled.div`
  width: 100%;
  min-width: max-content;
  font-size: 16px;
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
  align-items: center;
  column-gap: 10px;
  bottom: 0px;
`;

export const PriceTextContainer = styled.div`
  min-width: max-content;
  font-size: 16px;
`;
