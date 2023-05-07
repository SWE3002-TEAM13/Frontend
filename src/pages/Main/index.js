import MainPicture from "../../assets/main_picture.png";
import { MainPictureContainer } from "./styles";

function MainPage() {
  return (
    <>
      <MainPictureContainer
        src={MainPicture}
        alt="main_picture"
      ></MainPictureContainer>
    </>
  );
}

export default MainPage;
