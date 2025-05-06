import Head from 'next/head';
import { useState } from 'react';
import ChatbotModal from '../components/ChatbotModal';

export default function Home() {
  const [activeBot, setActiveBot] = useState<string | null>(null);

  const bots = [
    {
      label: 'コンセプトメイキング',
      url: 'https://udify.app/chatbot/NuXIbgeJE8039PSA',
    },
    {
      label: '講座作成',
      url: 'https://udify.app/chatbot/VdFWDBooqwAz8oIf',
    },
    {
      label: 'LP作成',
      url: 'https://udify.app/chatbot/gx7OZ8wPclMwtrMJ',
    },
  ];

  return (
    <>
      <Head>
        <title>社内チャットボットポータル</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-12">社内チャットボットポータル</h1>
        <div className="flex justify-center gap-6 flex-wrap">
          {bots.map((bot, index) => (
            <button
              key={index}
              onClick={() => setActiveBot(bot.url)}
              className="bg-white px-6 py-3 rounded-xl shadow-lg hover:bg-gray-100 font-semibold text-lg transition"
            >
              {bot.label}
            </button>
          ))}
        </div>
        {activeBot && (
          <ChatbotModal botUrl={activeBot} onClose={() => setActiveBot(null)} />
        )}
      </div>
    </>
  );
}