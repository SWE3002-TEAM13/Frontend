import { useState, useEffect } from 'react';
import { commonAxios } from '../../utils/commonAxios';
import { getCookie } from '../../utils/getCookie';
import { ChatPageTitle, ChatPageGrid } from './styles';
import ChatRoomList from '../../components/Chat/ChatRoomList';
import ChatMessageList from '../../components/Chat/ChatMessageList';

export default function ChatPage() {
  const [selectedChatRoom, setSelectedChatRoom] = useState(null);
  const [chatRooms, setChatRooms] = useState([]);

  useEffect(() => {
    commonAxios
      .get('chat', {
        headers: {
          Authorization: `Bearer ${getCookie('access_token')}`,
        },
      })
      .then(res => {
        console.log(res);
        setChatRooms(res.data.chatroom_info);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <ChatPageTitle>
        채팅:<span>하기</span>
      </ChatPageTitle>
      <ChatPageGrid>
        <ChatRoomList
          chatRooms={chatRooms}
          setSelectedChatRoom={setSelectedChatRoom}
        />
        <ChatMessageList selectedChatRoom={selectedChatRoom} />
      </ChatPageGrid>
    </>
  );
}
