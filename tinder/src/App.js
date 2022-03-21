import "./App.css";
import Header from "./components/Header";
import SwipeButton from "./components/SwipeButton";
import TinderCards from "./components/TinderCards";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chats from "./components/Chats";
import Chatscreen from "./components/Chatscreen";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/chat/:person"
            element={
              <div>
                <Header backButton="/chat" />
                <Chatscreen />
              </div>
            }
          ></Route>
          <Route
            path="/chat"
            element={
              <>
                <Header backButton="/" />
                <Chats />
              </>
            }
          ></Route>
          <Route
            path="/"
            element={
              <>
                <Header />
                <TinderCards />
                <SwipeButton />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
