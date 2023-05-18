import {
  ChatRoomCardContainer,
  ChatRoomCardContainerTitle,
  ChatRoomCard,
} from './styles';

export default function ChatRoomList(props) {
  const handleSelectChatRoom = chatRoom => {
    props.setSelectedChatRoom(chatRoom);
  };

  return (
    <ChatRoomCardContainer>
      <ChatRoomCardContainerTitle>
        채팅:<span>목록</span>
      </ChatRoomCardContainerTitle>

      {props.chatRooms.map((chatRoom, index) => (
        <ChatRoomCard
          key={index}
          onClick={() => {
            handleSelectChatRoom(chatRoom);
          }}
        >
          <img src={chatRoom.profile.thumbnail} alt="" />
          {chatRoom.profile.nickname}
          {chatRoom.profile.recent_message}
        </ChatRoomCard>
      ))}
    </ChatRoomCardContainer>
  );
}
