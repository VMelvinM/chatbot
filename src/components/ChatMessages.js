
const ChatMessages = ({ newMessages }) => {

  const chatMessageComponent = newMessages.map((chatMessage) => {
    return (
      <ChatMessage
        message={chatMessage.message}
        sender={chatMessage.sender}
        key={chatMessage.id}
      />
    );
  });

  return (
    <>
      {chatMessageComponent}
    </>
  );
}
