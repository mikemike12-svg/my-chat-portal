import Head from 'next/head';
import { useState } from 'react';
import ChatbotModal from '../components/ChatbotModal';

export default function Home() {
  const [activeBot, setActiveBot] = useState<string | null>(null);

  const bots = [
    { label: 'コンセプトメイキング', id: 'BOT_ID_1' },
    { label: '講座作成', id: 'BOT_ID_2' },
    { label: 'LP作成', id: 'BOT_ID_3' },
  ];

  return (
    <>
      <Head>
        <title>社内チャットボットポータル</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-12">社内チャットボットポータル</h1>
        <div className="flex justify-center gap-6">
          {bots.map((bot) => (
            <button
              key={bot.id}
              onClick={() => setActiveBot(bot.id)}
              className="bg-white px-6 py-3 rounded shadow-md hover:bg-gray-100 font-semibold"
            >
              {bot.label}
            </button>
          ))}
        </div>
        {activeBot && (
          <ChatbotModal botId={activeBot} onClose={() => setActiveBot(null)} />
        )}
      </div>
    </>
  );
}
