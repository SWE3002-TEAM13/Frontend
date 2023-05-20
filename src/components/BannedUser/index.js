import { CardDiv, ProfileImg, ProfileName, Button } from "./styles";

function BannedUser({ img, name, onClickUnblock, onClick }) {

    const handleClickUnblock = (event) => {
        event.stopPropagation();
        onClickUnblock();
    };

    return (
        <CardDiv onClick={onClick}>
            <ProfileImg imgUrl={img} />
            <ProfileName>{name}</ProfileName>
            <Button onClick={handleClickUnblock}>차단풀기</Button>
        </CardDiv>

    );
}

export default BannedUser;