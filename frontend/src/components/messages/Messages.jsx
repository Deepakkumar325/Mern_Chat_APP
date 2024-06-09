import useListenMessages from '../../hooks/useListenMessages'
import useGetMessages from '../../hooks/useGetMessage'
import Message from './Message';
import MessageSkeleton from './../skeletons/MessageSkeleton'
import { useRef, useEffect   } from 'react';
const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();

  const lastMessageRef = useRef();
  console.table(lastMessageRef);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto" ref={lastMessageRef}>
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id}>
            <Message message={message} />
          </div>
        ))}

      {loading &&
        [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <p className="text-center tow">
          Send a message to start the conversation
        </p>
      )}
    </div>
  );
};

export default Messages;
