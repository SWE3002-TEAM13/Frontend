import styled from "@emotion/styled";

export const NavigationContainer = styled.div`
  padding: 30px 30px 10px 30px;
  width: 100%;
`;

export const IconBtn = styled.button`
  :focus {
    cursor: pointer;
  }
  border: none;
  background-color: transparent;
  width: max-content;
  height: max-content;
`;
export const NavigationBack = styled.img`
  width: 25px;
  height: 25px;
`;

export const InfoContainer = styled.div`
  width: 100%;
  min-height: 100px;
  padding: 0px 50px;
  background-color: ${({ theme }) => theme.color.white};
`;

export const PhotoContainer = styled.div`
  width: 100%;
  min-height: 500px;
  background-color: ${({ theme }) => theme.color.gray};
`;

export const Photo = styled.img`
  width: 100%;
  min-height: 100%;
`;

export const ConetentsContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 200px;
  padding: 50px;
  background-color: ${({ theme }) => theme.color.white};
  position: relative;
`;

export const InfoTitleAndLikeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
`;

export const InfoTitleContainer = styled.div`
  width: 100%;
  min-width: min-content;
  font-size: 30px;
`;

export const OtherInfoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const OtherTextContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  column-gap: 20px;
`;
export const InfoAuthorContainer = styled.button`
  :focus {
    cursor: pointer;
  }
  border: none;
  background-color: transparent;
  font-size: 15px;
  font-weight: lighter;
  align-items: center;
  color: ${({ theme }) => theme.color.darkGray};
`;

export const InfoDateContainer = styled.div`
  font-size: 15px;
  font-weight: lighter;
  align-items: center;
  color: ${({ theme }) => theme.color.darkGray};
`;

export const InfoStateAndPriceContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: end;
  align-items: center;
  column-gap: 10px;
  bottom: 0px;
`;

export const InfoPriceTextContainer = styled.div`
  min-width: max-content;
  font-size: 25px;
`;

export const InfoContentContainer = styled.div`
  min-height: max-content;
  font-size: 15px;
`;

export const OtherContentContainer = styled.div`
  display: flex;
  bottom: 50px;
  align-items: end;
  position: absolute;
  column-gap: 10px;
`;

export const EditIconContainer = styled.img`
  width: 25px;
  height: 25px;
`;

export const DeleteIconContainer = styled.img`
  width: 25px;
  height: 25px;
`;

export const ChatButtonContainer = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
`;
