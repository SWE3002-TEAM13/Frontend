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
          selected={
            props.selectedChatRoom && props.selectedChatRoom.id === chatRoom.id
          }
        >
          <img src={chatRoom.profile.thumbnail} alt="" />
          <div>
            <p className="chatNickname">{chatRoom.profile.nickname}</p>
            {chatRoom.send_time && (
              <p className="chatSendTime">
                {new Date(chatRoom.send_time).toLocaleString('ko-KR')}
              </p>
            )}
            <p className="chatRecentMessage">{chatRoom.recent_message}</p>
          </div>
        </ChatRoomCard>
      ))}
    </ChatRoomCardContainer>
  );
}
