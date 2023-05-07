import Form from "../common/Form";
import Like from "../common/Like";
import {
  NavigationContainer,
  InfoContainer,
  PhotoContainer,
  ConetentsContainer,
  InfoTitleAndLikeContainer,
  InfoTitleContainer,
} from "./styles";

function Info() {
  return (
    <Form
      info={
        <>
          <NavigationContainer></NavigationContainer>
          <InfoContainer>
            <InfoTitleAndLikeContainer>
              <InfoTitleContainer>제목입니다</InfoTitleContainer>
              <Like></Like>
            </InfoTitleAndLikeContainer>
          </InfoContainer>
          <PhotoContainer></PhotoContainer>
          <ConetentsContainer></ConetentsContainer>
        </>
      }
    ></Form>
  );
}

export default Info;
