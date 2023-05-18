import { 
    AnnouncementContainer, 
    LeftContainer, 
    Title, 
    Content, 
    RightContainer, 
    CreatedAt 
} from "./styles";

function Announcement ({data}) {
  return (
    <AnnouncementContainer>
        <LeftContainer>
            <Title>{data.title}</Title>
            <Content>{data.content}</Content>
        </LeftContainer>
        <RightContainer>
            <CreatedAt>{data.created_at.split("T")[0]}</CreatedAt>
        </RightContainer>
    </AnnouncementContainer>
  );
}

export default Announcement