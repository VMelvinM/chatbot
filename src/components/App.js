
const App = () => {

  const messages = [];

  const [newMessages, setNewMessages] = React.useState(messages);

  return (
    <>
      <ChatInput
        newMessages={newMessages}
        setNewMessages={setNewMessages}
      />
      <ChatMessages newMessages={newMessages} />
    </>
  );
}
