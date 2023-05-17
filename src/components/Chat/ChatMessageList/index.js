import { useState, useEffect } from 'react';
import { ChatMessageContainer } from './styles';
import { commonAxios } from '../../../utils/commonAxios';
import { getCookie } from '../../../utils/getCookie';

export default function ChatMessageList(props) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (props.selectedChatRoom) {
      commonAxios(`/chat/chatroom/${props.selectedChatRoom.id}`, {
        headers: {
          Authorization: `Bearer ${getCookie('access_token')}`,
        },
      })
        .then(res => {
          console.log(res);
          setMessages(res.data);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, [props.selectedChatRoom]);

  return (
    <ChatMessageContainer>
      {messages.map((message, index) => (
        <>
          <div>{message.profile.nickname}</div>
          <div>{message.message}</div>
          <div>{message.created_at}</div>
        </>
      ))}
    </ChatMessageContainer>
  );
}
