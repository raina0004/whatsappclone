import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import "./Chat.css"
import SearchIcon from '@mui/icons-material/Search';

import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import SearchIcon from '@mui/icons-material/Search';
const Chat = () => {
  return (
    <div className='chat'>
        <div className='chat__header'>
            <Avatar/>
            <div className='chat_headerInfo'>
                <h3>Room name</h3>
                <p>Last seen at 10:45 am</p>
            </div>
            <div className='chat__headerRight'>
            <IconButton>
                <SearchIcon/>
                </IconButton>

                <IconButton>
                <ChatIcon/>
                </IconButton>

                <IconButton>
                <MoreVertIcon/>
                </IconButton>
            </div>

        </div>

     
        </div>
  )
}

export default Chat