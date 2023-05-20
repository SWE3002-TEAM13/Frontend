import { StyledChatButton, ChatIconContainer } from "./styles";
import ChatIcon from "../../../assets/send_chat.svg";

function ChatButton(props) {
  return (
    <StyledChatButton type="button">
      <ChatIconContainer src={ChatIcon} alt="send_chat" />
    </StyledChatButton>
  );
}

export default ChatButton;
