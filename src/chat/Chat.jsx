import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "./Chat.css";
import TextField from "@mui/material/TextField";
import Form from "../components/ChatComponents/Form";
import Messages from "../components/ChatComponents/Messages";
import UserBar from "../components/ChatComponents/UserBar";
import OnlineUserBar from "../components/ChatComponents/OnlineUserBar";
import send_btn from "../media/back_btn.svg";
import { IconButton } from "@mui/material";

const Chat = () => {
  const profile = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [currentDialog, setCurrentDialog] = useState("");
  const config = {
    headers: { Authorization: `Bearer ${profile.token}` },
  };
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://hack.invest-open.ru/chat/dialog`,
        config
      );
      setCurrentDialog(data.dialogId);
      const msgs = await axios.get(
        `https://hack.invest-open.ru/chat/history?dialogId=${data.dialogId}`,
        config
      );
      msgs.data.messages.map(async (m) => {
        const { data } = await axios.get(
          `https://hack.invest-open.ru/user/info?userId=${m.sender}`,
          config
        );
        
        return m.name = data.name
      });
      setMessages(msgs.data.messages);
      
      setLoading(true);
    };
    fetchData();
  }, [loading]);

  const [message_input, setMessage_input] = useState("");

  const onMessageSend = async () => {
    const bodyParameters = {
      message: {
        dialogId: currentDialog,
        text: message_input,
        messageType: "TEXT",
      },
    };
    const { data } = await axios.post(
      `https://hack.invest-open.ru/message/send`,
      bodyParameters,
      config
    );
    setMessage_input("");
    setLoading(false);
  };

  const [messages, setMessages] = useState([
    {
      text: "hello",
      name: "Sedrick k",
      sender: 100275,
    },
    {
      text: "hello sedrick :)",
      name: "sdsfsf",
      sender: 100274,
    },
  ]);

  const [user, setUser] = useState({
    id: 1,
    name: "Alex",
    surname: "Rgt",
    available: false,
    avatar:
      "https://images.squarespace-cdn.com/content/v1/52e90534e4b07f1315fbe6f4/1392046490216-8RCZF0ZQD1RH00P7QVRN/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/andy-horner-portrait-circle-blog.jpg",
  });
  console.log(messages)
  return (
    <div>
      <div className="content">
        <div className="list_subjects">
          <div>
            <img src={user.avatar} alt=""></img>
            <div style={{ display: "flow-root", alignItems: "start" }}>
              <h1>
                {user.name} {user.surname}
              </h1>
              <h3>В сети</h3>
            </div>
          </div>
        </div>
        <div className="chat_screen">
          <Messages style={{ marginTop: "20px" }} messages={messages} />
          <div
            style={{
              position: "absolute",
              bottom: "0",
              display: "flex",
              width: "60vw",
            }}
          >
            <TextField
              fullWidth
              style={{
                borderColor: "black",
                maxWidth: "55vw",
                marginTop: "20px",
                marginBottom: 10,
                marginLeft: 10,
              }}
              value={message_input}
              id="outlined-basic"
              label="Сообщение"
              variant="outlined"
              onChange={(e) => setMessage_input(e.target.value)}
            />
            <IconButton
              onClick={() => onMessageSend()}
              style={{
                marginLeft: "auto",
                width: 30,
                height: 30,
                marginRight: 20,
                marginTop: 30,
              }}
              aria-label="delete"
            >
              <img
                style={{ width: 30, height: 30 }}
                src={send_btn}
                alt="btn"
              ></img>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
