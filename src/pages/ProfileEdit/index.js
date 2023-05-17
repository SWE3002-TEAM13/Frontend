import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import emblem from '../../assets/emblem.png';
import TextInput from '../../components/common/TextInput';
import { commonAxios } from '../../utils/commonAxios';
import { getCookie } from '../../utils/getCookie';

function ProfileEditPage() {
  const [profile, setProfile] = useState({});
  const [profilePicture, setProfilePicture] = useState(null);
  const [newProfilePicture, setNewProfilePicture] = useState(null);
  const [nickname, setNickname] = useState('');
  const [loc, setLoc] = useState(null);
  const fileInputRef = useRef(null);

  const handleClickFileInput = () => {
    fileInputRef.current.click();
  };

  const handleProfilePictureUpload = () => {
    const file = fileInputRef.current.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfilePictureDelete = () => {
    setNewProfilePicture(null);
  };

  const handleNicknameChange = event => {
    setNickname(event.target.value);
  };

  const handleLocChange = () => {
    setLoc(!loc);
  };

  useEffect(() => {
    // 페이지가 로드되었을 때 실행되는 코드
    commonAxios
      .get(`/user/profile/me`, {
        headers: {
          Authorization: `Bearer ${getCookie('access_token')}`,
        },
      })
      .then(res => {
        setProfile(res.data);
        setProfilePicture(res.data.profile.thumbnail);
        setLoc(res.data.profile.loc);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const handleUpdateProfile = () => {
    // FormData 객체를 생성합니다.
    const formData = new FormData();
    // nickname 값을 추가합니다.
    formData.append('nickname', nickname);
    // loc 값을 추가합니다.
    formData.append('loc', loc);
    // newProfilePicture가 있는 경우에만 thumbnail 값을 추가합니다.
    if (newProfilePicture) {
      formData.append('thumbnail', newProfilePicture);
    }

    commonAxios
      .put(`/user/profile`, formData, {
        headers: {
          Authorization: `Bearer ${getCookie('access_token')}`,
        },
      })
      .then(res => {
        alert('프로필 수정이 완료되었습니다');
        window.location.reload();
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <Container>
      {profile.profile && profile.profile.nickname && (
        <>
          <ProfileTitleBox>
            <ProfileTitleName>{profile.profile.nickname}</ProfileTitleName>
            <ProfileTitleText>프로필</ProfileTitleText>
          </ProfileTitleBox>
          <ProfileBox>
            <ImgUploadDiv imgUrl={profile.profile.thumbnail} />
            <ProfileDiv>
              <ProfileName>{profile.profile.nickname}</ProfileName>
              <CampusName>{profile.profile.loc_str}</CampusName>
            </ProfileDiv>
          </ProfileBox>
          <ProfileEditTitle>프로필 수정</ProfileEditTitle>
          <ImgContainer>
            <ImgTextDiv>
              <InputTitle>프로필 사진</InputTitle>
              <NicknameExplain>
                자신을 대표할 <br /> 사진을 설정하세요!{' '}
              </NicknameExplain>
              <SmallButton background="#8DC63F" onClick={handleClickFileInput}>
                업로드
                <StyledFileInput
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleProfilePictureUpload}
                />
              </SmallButton>
              <SmallButton
                background="#C4C4C4"
                onClick={handleProfilePictureDelete}
              >
                삭제
              </SmallButton>
            </ImgTextDiv>
            <ImgUploadDiv
              profilePicture={newProfilePicture ?? profilePicture}
            />
          </ImgContainer>
          <InputDiv>
            <InputTitle>닉네임</InputTitle>
            <NicknameExplain>
              다른 사람들에게 보여줄 닉네임을 설정하세요!
            </NicknameExplain>
            <TextInput
              width="530px"
              value={
                nickname || (profile.profile && profile.profile.nickname) || ''
              }
              onChange={handleNicknameChange}
            ></TextInput>
          </InputDiv>
          <CheckBoxDiv>
            <CheckBoxTitle>위치</CheckBoxTitle>
            <CheckBoxText>
              자연과학캠퍼스(율전)
              <Checkbox
                type="checkbox"
                checked={loc}
                onChange={handleLocChange}
              />
            </CheckBoxText>
            <CheckBoxText>
              인문사회과학캠퍼스(명륜)
              <Checkbox
                type="checkbox"
                checked={!loc}
                onChange={handleLocChange}
              />
            </CheckBoxText>
          </CheckBoxDiv>
          <Button onClick={handleUpdateProfile}>수정하기</Button>
        </>
      )}
    </Container>
  );
}

export default ProfileEditPage;

const Container = styled.div`
  margin-top: 84px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

const ProfileTitleBox = styled.div`
  display: flex;
  align-items: baseline;
  width: 510px;
  justify-content: space-between;
`;

const ProfileTitleName = styled.div`
  font-size: 60px;
  font-weight: bold;
  color: #5b756c;
`;

const ProfileTitleText = styled.div`
  font-size: 45px;
  font-weight: bold;
  color: #8dc63f;
`;

const ProfileBox = styled.div`
  width: 600px;
  margin-top: 70px;
  display: flex;
`;

const ImgUploadDiv = styled.div`
  background: ${({ imgUrl }) => `url(${imgUrl})`};
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  height: 180px;
  width: 180px;
  background-image: ${({ profilePicture }) =>
    profilePicture ? `url(${profilePicture})` : null};
  background-size: cover;
  background-position: center;
`;

const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 62px;
  margin-top: 43px;
`;

const ProfileName = styled.div`
  font-size: 40px;
  color: #8dc63f;
  font-weight: bold;
`;

const CampusName = styled.div`
  font-size: 25px;
  color: #808080;
  margin-top: 15px;
`;

const ProfileEditTitle = styled.div`
  font-weight: bold;
  font-size: 60px;
  color: #5b756c;
  margin-top: 63px;
  margin-bottom: 35px;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
`;

const ImgTextDiv = styled.div`
  width: 200px;
`;

const SmallButton = styled.button`
  border: none;
  background: ${({ background }) => background};
  width: 70px;
  height: 39px;
  border-radius: 8px;
  color: white;
  font-size: 18px;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const StyledFileInput = styled.input`
  display: none;
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  border: none;
  width: 530px;
  height: 50px;
  background: #8dc63f;
  color: white;
  font-size: 23px;
  margin-bottom: 41px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const InputTitle = styled.div`
  display: flex;
  font-style: normal;
  font-size: 23px;
  color: #2c3e50;
  margin-top: 39px;
  margin-bottom: 6px;
`;

const NicknameExplain = styled.div`
  font-size: 15px;
  color: #737373;
  margin-bottom: 13px;
`;

const InputDiv = styled.div``;

const CheckBoxTitle = styled.div`
  color: #000000;
  font-size: 25px;
`;

const CheckBoxText = styled.div`
  color: #6c757d;
  font-size: 18px;
`;

const CheckBoxDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 60px;
  width: 530px;
`;

const Checkbox = styled.input`
  margin-left: 8px;
`;
