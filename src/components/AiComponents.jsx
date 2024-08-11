'use client'
import { GoogleGenerativeAI } from '@google/generative-ai';
import React, { useState } from 'react'
import { API_KEY } from '../constant/index.js';

// const { GoogleGenerativeAI } = ("@google/generative-ai");


// Access your API key as an environment variable (see "Set up your API key" above)

const AiComponents = () => {

    const genAI = new GoogleGenerativeAI(API_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const sendMessage = async () => {
    
        if (input.trim()) {
            setMessages([...messages, { text: input, isUser: true }]);

            const result = await model.generateContent(input);
            console.log(result.response.text());

            setInput('');
            // const response = await result.response;
            // const responseMessage = response.text();
            // यहां रिसीव किए गए मैसेज को टेस्ट करने के लिए एक सिमुलेटेड रिस्पॉन्स ऐड कर रहे हैं
            setTimeout(() => {
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: result.response.text(), isUser: false }
                ]);
            }, 1000);
        }
    };

    // async function run() {
    //     const prompt = "Write a story about an AI and magic"

    //     const result = await model.generateContent(prompt);
    //     const response = await result.response;
    //     const text = response.text();
    //     console.log(text);
    //   }

    //   run();

    return (

        <div className="flex flex-col h-[600px] px[100px] bg-gray-100">
            <div className='flex justify-center items-center py-4 '>
                <h1 className="rainbow-text">wDeveloper ke AI me aapka swagat hai</h1>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`p-2 my-2 rounded-lg w-fit max-w-xs ${msg.isUser
                            ? 'bg-blue-500 text-white self-end'
                            : 'bg-gray-300 text-black self-start'
                            }`}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="p-4 bg-white border-t">
                <input
                    className="border p-2 w-full rounded-lg"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type your message..."
                />
            </div>
        </div>
    )
}

export default AiComponents
