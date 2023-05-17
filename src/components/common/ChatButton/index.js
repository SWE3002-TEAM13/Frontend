import { StyledChatButton, ChatIconContainer } from "./styles";
import ChatIcon from "../../../assets/send_chat.svg";

function ChatButton() {
  return (
    <StyledChatButton>
      <ChatIconContainer type="button" src={ChatIcon} alt="send_chat" />
    </StyledChatButton>
  );
}

export default ChatButton;
