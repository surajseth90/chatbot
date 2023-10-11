import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import config from './Config';

export default function chatbot(){
    return <Chatbot 
    config ={config}
    messageParser={MessageParser}
    actionProvider={ActionProvider}
    />
}