import { CardDiv, ProfileImg, ProfileName, Button } from "./styles";

function BannedUser ({img, name}) {
    return(
        <CardDiv>
            <ProfileImg imgUrl={img}/>
            <ProfileName>{name}</ProfileName>
            <Button>차단풀기</Button>
        </CardDiv>

    );
}

export default BannedUser;