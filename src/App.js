import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Preview from "./Preview";
import WebcamCapture from "./WebcamCapture";
import Chats from "./Chats";
import ChatView from "./ChatView";

function App() {
    return (
        <div className="app">
            <Router>
                <div className="app__body">
                    <Switch>
                        <Route exact path="/">
                            <WebcamCapture />
                        </Route>
                        <Route path="/preview">
                            <Preview />
                        </Route>
                        {/* Order matters for routing when using history push, because also this inside switch case */}
                        <Route path="/chats/view"> 
                            <ChatView />
                        </Route>
                        <Route path="/chats">
                            <Chats />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
