import styled from "@emotion/styled";

export const InputForm = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
`;

export const InputTitleContainer = styled.input`
  ::placeholder {
    font-size: 20px;
    color: ${({ theme }) => theme.color.darkGray};
  }
  :focus {
    outline: none;
  }
  background-color: ${({ theme }) => theme.color.gray};
  width: 100%;
  height: 65px;
  padding: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  border-radius: 20px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const InputCategoryContainer = styled.div`
  display: flex;
  column-gap: 10px;
  margin-bottom: 15px;
`;

export const InputPriceContainer = styled.div`
  display: flex;
  column-gap: 10px;
  margin-bottom: 15px;
`;

export const PriceText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PriceContainer = styled.div`
  background-color: ${({ theme }) => theme.color.gray};
  width: 200px;
  height: 40px;
  padding: 10px 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  border-radius: 15px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputPrice = styled.input`
  :focus {
    outline: none;
  }
  width: 150px;
  height: 40px;
  padding: 10px 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const StatesContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  column-gap: 10px;
`;

export const UploadPhotoContainer = styled.div`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const LabelInputContainer = styled.label``;

export const InputPhotoIcon = styled.img`
  cursor: pointer;
  width: 30px;
  height: 30px;
`;

export const UploadedPhotoInfoContainer = styled.div``;

export const InputPhotoContainer = styled.input`
  display: none;
`;

export const TextAreaContainer = styled.div`
  width: 100%;
  height: 500px;
  margin-bottom: 30px;
`;

export const TextArea = styled.textarea`
  ::placeholder {
    font-size: 20px;
    color: ${({ theme }) => theme.color.gray};
  }
  :focus {
    outline: none;
  }
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  resize: none;
  padding: 15px;
  width: 100%;
  height: 100%;
  font-size: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.lightGray};
`;

export const InputTypeContainer = styled.div``;

export const SaveButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
