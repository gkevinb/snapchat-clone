import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Preview from "./Preview";
import WebcamCapture from "./WebcamCapture";
import Chats from "./Chats";
import ChatView from "./ChatView";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, login, logout } from "./features/appSlice";
import Login from "./Login";
import { auth } from "./firebase";

function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                dispatch(
                    login({
                        username: authUser.displayName,
                        profilePic: authUser.photoURL,
                        id: authUser.uid,
                    })
                );
            } else {
                dispatch(logout());
            }
        });
    }, [dispatch]);

    return (
        <div className="app">
            <Router>
                {!user ? (
                    <Login />
                ) : (
                    <>
                        <img
                            className="app__logo"
                            src="https://lakeridgenewsonline.com/wp-content/uploads/2020/04/snapchat.jpg"
                            alt=""
                        />
                        <div className="app__body">
                            <div className="app__bodyBackground">
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
                        </div>
                    </>
                )}
            </Router>
        </div>
    );
}

export default App;
