
const ChatInput = ({ newMessages, setNewMessages }) => {

  const [inputValue, setInputValue] = React.useState('');

  function saveInputValue(event) {
    setInputValue(event.target.value);
  }

  function sendMessage() {

    if(inputValue === ''){
      alert('Type a message!');
      return;
    }

    setNewMessages([
      ...newMessages, {
        message: inputValue,
        sender: 'user',
        id: crypto.randomUUID()
      },{
        message:Chatbot.getResponse(inputValue),
        sender:'robot',
        id: crypto.randomUUID()

      }
    ]);

    setInputValue('');
  }

  return (
    <div>
      <input
        placeholder='Send a message!'
        onChange={saveInputValue}
        value={inputValue}
      />
      <button onClick={sendMessage}
      className="bg-sky-500"
      >Send</button>
    </div>
  );
}
