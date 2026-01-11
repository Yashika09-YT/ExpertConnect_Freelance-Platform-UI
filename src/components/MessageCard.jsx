const MessageCard = ({ name, msg, time }) => {
  return (
    <div className="border rounded-lg p-3 mb-3">
      <div className="flex justify-between">
        <p className="font-medium">{name}</p>
        <span className="text-xs text-gray-400">{time}</span>
      </div>
      <p className="text-sm text-gray-500 mt-1">{msg}</p>
    </div>
  );
};

export default MessageCard;
