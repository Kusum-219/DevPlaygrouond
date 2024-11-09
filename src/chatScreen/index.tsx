import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {Text, View} from 'react-native';
import socket from '../../utils';
export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    console.log('hiiii');
    console.log(socket?.id, 'socket?.id', socket);
    socket?.on('connect', () => {
      console.log('Connected to server with socket ID:', socket.id);
    });
  }, []);

  const onSend = useCallback((messages = []) => {
    const updatedMessages = messages.map(message => ({
      ...message,
      user: {
        ...message.user,
        name: 'k.k', // Set the sender's name here
        avatar: 'https://placeimg.com/140/140/any', // Set the sender's avatar here
      },
    }));

    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, updatedMessages),
    );

    // Emit the message to the server
  }, []);

  return (
    <View style={{flex: 1}}>
      <Text>Hiii</Text>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
}
