import Form from '../common/Form';
import {
  InputCategoryContainer,
  InputForm,
  InputPhotoContainer,
  InputPhotoIcon,
  InputPrice,
  InputPriceContainer,
  InputTitleContainer,
  LabelInputContainer,
  PriceContainer,
  PriceText,
  SaveButtonContainer,
  StatesContainer,
  TextArea,
  TextAreaContainer,
  UploadPhotoContainer,
  UploadedPhotoInfoContainer,
} from './styles';
import Button from '../common/PostButton';
import StateTag from '../common/StateTag';
import PhotoIcon from '../../assets/image.svg';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { commonAxios } from '../../utils/commonAxios';
import { getCookie } from '../../utils/getCookie';

function Post(props) {
  const [title, setTitle] = useState('');
  const [selectedType, setSelectedType] = useState(props.type);
  const [price, setPrice] = useState(-1);
  const [selectedState, setSelectedState] = useState('possible');
  const [file, setFile] = useState('');
  const [content, setContent] = useState('');
  const [filename, setFilename] = useState('선택된 파일 없음');
  const [disabled, setDisabled] = useState(false);

  const edit = props.edit ? true : false;

  useEffect(() => {
    setSelectedType(props?.edit?.type);
    setSelectedState(props?.edit?.status);
  }, [props]);

  const movePage = useNavigate();

  const goBack = () => {
    movePage(`/${props.type}`);
  };

  const handleClickTypeButton = e => {
    setSelectedType(e.target.id);
    console.log(selectedType);
  };

  const handleClickStateButton = e => {
    setSelectedState(e.target.id);
    console.log(selectedState);
  };

  const handleChangeTitle = e => {
    setTitle(e.target.value);
  };

  const handleChangePrice = e => {
    setPrice(e.target.value);
  };

  const handleChangeFile = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const handleFilename = e => {
    if (edit) {
      let ptr = props.edit.photo.lastIndexOf('/');
      return props.edit.photo.substr(ptr + 1);
    } else {
      return filename;
    }
  };

  const handleChangeContent = e => {
    setContent(e.target.value);
  };

  const handleSubmit = async e => {
    setDisabled(true);
    e.preventDefault();
    commonAxios
      .post(
        `/post`,
        {
          params: {
            type: selectedType,
            title: title,
            status: selectedState,
            price: price,
            photo: file,
            content: content,
            category: 'Book',
          },
        },
        {
          headers: {
            Authorization: `Bearer ${getCookie('access_token')}`,
          },
        }
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });

    await new Promise(r => setTimeout(r, 1000));
    if (title.length < 1 || price < -1 || content.length < 1) {
      alert('형식에 맞게 글을 작성해주세요.');
    } else {
      alert('글이 작성되었습니다.');
      goBack();
    }
    setDisabled(false);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      children={
        <InputForm>
          <InputTitleContainer
            placeholder="글의 제목을 작성해주세요."
            defaultValue={edit ? props.edit.title : null}
            onChange={handleChangeTitle}
          />
          <InputCategoryContainer>
            <Button
              type="button"
              text="대여원해요"
              id="rent"
              className={'type' + ('rent' === selectedType ? ' active' : '')}
              onClick={handleClickTypeButton}
            />
            <Button
              type="button"
              text="대여합니다"
              id="lend"
              className={'type' + ('lend' === selectedType ? ' active' : '')}
              onClick={handleClickTypeButton}
            />
            <Button
              type="button"
              text="나눔합시다"
              id="share"
              className={'type' + ('share' === selectedType ? ' active' : '')}
              onClick={handleClickTypeButton}
            />
          </InputCategoryContainer>
          <InputPriceContainer>
            <PriceText> 희망 가격 </PriceText>
            <PriceContainer>
              <InputPrice
                defaultValue={edit ? props.edit.price : null}
                onChange={handleChangePrice}
              ></InputPrice>
              <p>원</p>
            </PriceContainer>
          </InputPriceContainer>
          <StatesContainer>
            <StateTag
              text="possible"
              id="possible"
              className={
                'state' + ('possible' === selectedState ? ' active' : '')
              }
              onClick={handleClickStateButton}
            />
            <StateTag
              text="progress"
              id="progress"
              className={
                'state' + ('progress' === selectedState ? ' active' : '')
              }
              onClick={handleClickStateButton}
            />
            <StateTag
              text="done"
              id="done"
              className={'state' + ('done' === selectedState ? ' active' : '')}
              onClick={handleClickStateButton}
            />
          </StatesContainer>
          <UploadPhotoContainer>
            <LabelInputContainer htmlFor="uploadPhoto">
              <InputPhotoIcon src={PhotoIcon} alt="image" />
            </LabelInputContainer>
            <InputPhotoContainer
              id="uploadPhoto"
              type="file"
              name="uploadPhoto"
              accept="image/*"
              onChange={handleChangeFile}
            />
            <UploadedPhotoInfoContainer>
              {handleFilename()}
            </UploadedPhotoInfoContainer>
          </UploadPhotoContainer>
          <TextAreaContainer>
            <TextArea
              placeholder="글의 내용을 작성해주세요."
              onChange={handleChangeContent}
              defaultValue={edit ? props.edit.content : null}
            />
          </TextAreaContainer>
          <SaveButtonContainer>
            <Button
              type="submit"
              className="submit basic"
              text="저장하기"
              disabled={disabled}
            />
          </SaveButtonContainer>
        </InputForm>
      }
    />
  );
}

export default Post;
