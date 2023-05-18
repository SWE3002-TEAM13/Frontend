import { CardDiv, ProfileImg, ProfileName, Button } from "./styles";

function BannedUser({ img, name, onClickUnblock }) {
    return (
        <CardDiv>
            <ProfileImg imgUrl={img} />
            <ProfileName>{name}</ProfileName>
            <Button onClick={onClickUnblock}>차단풀기</Button>
        </CardDiv>

    );
}

export default BannedUser;