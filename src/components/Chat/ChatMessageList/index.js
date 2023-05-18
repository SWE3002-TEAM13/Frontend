import { useState, useEffect } from 'react';
import { ChatMessageContainer, ChatMessageInput } from './styles';
import { commonAxios } from '../../../utils/commonAxios';
import { getCookie } from '../../../utils/getCookie';
import { useMe } from '../../../utils/useMe';

export default function ChatMessageList(props) {
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(null);

  const me = useMe();

  useEffect(() => {
    if (props.selectedChatRoom) {
      commonAxios(`/chat/chatroom/${props.selectedChatRoom.id}`, {
        headers: {
          Authorization: `Bearer ${getCookie('access_token')}`,
        },
      })
        .then(res => {
          setMessages(res.data);
        })
        .catch(err => {
          console.error(err);
        });

      const newWs = new WebSocket(
        `${process.env.REACT_APP_SOCKET_ENDPOINT}/chat/ws/${
          props.selectedChatRoom.id
        }?token=${getCookie('access_token')}`
      );

      newWs.onopen = () => {
        console.log('connected');
      };
      newWs.onclose = () => {
        console.log('closed');
      };
      newWs.onmessage = event => {
        const data = JSON.parse(event.data);
        console.log(data);
        console.log(messages);
        setMessages(prevMessages => [...prevMessages, data]);
      };

      setWs(newWs);

      return () => {
        newWs.close();
      };
    }
  }, [props.selectedChatRoom]);

  const sendMessage = event => {
    if (event.key === 'Enter' && event.target.value !== '') {
      if (!ws || ws.readyState !== WebSocket.OPEN) {
        console.error('not connected');
        return;
      }

      event.preventDefault();
      ws.send(event.target.value);
      event.target.value = '';
    }
  };

  return (
    <ChatMessageContainer>
      {messages.map(
        (message, index) => (
          // me.id === message.sender_id ? (
          //   <div key={index}>
          //     <div>{message.sender_profile.nickname}</div>
          //     <div>{message.message}</div>
          //     <div>{message.created_at}</div>
          //   </div>
          // ) : (
          <div key={index}>
            {/* <img src={message.sender_profile.thumbnail} key={index} alt="" /> */}
            <div>{message.sender_profile.nickname}</div>
            <div>{message.message}</div>
            <div>{message.created_at}</div>
          </div>
        )
        // )
      )}
      <ChatMessageInput onKeyDown={sendMessage} />
    </ChatMessageContainer>
  );
}
