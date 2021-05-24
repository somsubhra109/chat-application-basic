import React from 'react'
import {ChatEngine} from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'

function App() {
if(!localStorage.getItem('username')) return <LoginForm/>



  return (
      <ChatEngine className="app"
          height="100vh"
          publicKey="68147f95-4e04-4624-b02c-01b0725a0548"
          userName={localStorage.getItem('username')}
          userSecret={localStorage.getItem('password')}
          renderChatFeed={(chatAppprops)=> <ChatFeed {...chatAppprops} />}
      />

  )
}

export default App
