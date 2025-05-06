import { FC } from 'react';

type Props = {
  botUrl: string;
  onClose: () => void;
};

const ChatbotModal: FC<Props> = ({ botUrl, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-3xl h-[80vh] relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-xl font-bold text-gray-600 hover:text-black"
        >
          ×
        </button>
        <iframe
          src={botUrl}
          className="w-full h-full rounded-b-xl"
          allow="clipboard-write"
        />
      </div>
    </div>
  );
};

export default ChatbotModal;
