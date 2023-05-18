import { useState, useEffect, useRef } from 'react';
import {
  ChatContentContainer,
  ChatMessageContainer,
  ChatMessageInputContainer,
  ChatMessage,
} from './styles';
import { commonAxios } from '../../../utils/commonAxios';
import { getCookie } from '../../../utils/getCookie';
import { useMe } from '../../../utils/useMe';
import { ReactComponent as SendChatIcon } from '../../../assets/send_chat.svg';

export default function ChatMessageList(props) {
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(null);

  const me = useMe();

  const chatMessageContainer = useRef(null);
  const chatMessageInput = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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

  const sendMessage = message => {
    if (!ws || ws.readyState !== WebSocket.OPEN) {
      console.error('not connected');
      return;
    }

    ws.send(message);
  };

  const handleSendEnter = event => {
    if (event.key === 'Enter' && event.target.value !== '') {
      event.preventDefault();

      sendMessage(event.target.value);

      event.target.value = '';
    }
  };

  const handleSendClick = () => {
    if (chatMessageInput.current) {
      if (chatMessageInput.current.value === '') return;

      sendMessage(chatMessageInput.current.value);

      chatMessageInput.current.value = '';
    }
  };

  const scrollToBottom = () => {
    if (chatMessageContainer.current) {
      chatMessageContainer.current.scrollTop =
        chatMessageContainer.current.scrollHeight;
    }
  };

  return (
    <ChatContentContainer>
      <ChatMessageContainer ref={chatMessageContainer}>
        {messages.map((message, index) =>
          me.id === message.sender_id ? (
            <ChatMessage key={index} me={true}>
              <div>
                <div className="messageText">{message.message}</div>
                <div className="messageDate">
                  {new Date(message.created_at).toLocaleString('ko-KR')}
                </div>
              </div>
            </ChatMessage>
          ) : (
            <ChatMessage key={index}>
              <img src={message.sender_profile.thumbnail} key={index} alt="" />
              <div>
                <div className="messageText">{message.message}</div>
                <div className="messageDate">
                  {new Date(message.created_at).toLocaleString('ko-KR')}
                </div>
              </div>
            </ChatMessage>
          )
        )}
      </ChatMessageContainer>
      <ChatMessageInputContainer>
        <input onKeyDown={handleSendEnter} ref={chatMessageInput} />
        <button onClick={handleSendClick}>
          <SendChatIcon />
        </button>
      </ChatMessageInputContainer>
    </ChatContentContainer>
  );
}
