
import { BrowserRouter as Router, Routes, Route, Switch, Redirect, BrowserRouter, Alert } from "react-router-dom";
import Login from "./login/Login";
import Registration from "./registration/Registration";
import ListConsultant from "./list_consultant/ListConsultant";
import Profile from "./profile/Profile";
import Chat from "./chat/Chat";
import { store } from "./redux/store";
import { Provider, useSelector } from "react-redux";
import { Header } from "./header/Header";


function App() {
  const {user} = useSelector((state)=>state.auth)
  return (
    
      <Router>
        {
              user !== null ? <Header /> : null
        }
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/list_consultant" element={<ListConsultant />} />
        </Routes>
      </Router>
    
  );
}

export default App;






