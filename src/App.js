import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Preview from "./Preview";
import WebcamCapture from "./WebcamCapture";

function App() {
    return (
        <div className="App">
            <h1>Let's build snapchat</h1>
            <Router>
                <div className="app__body">
                    <Switch>
                        <Route exact path="/">
                            <WebcamCapture />
                        </Route>
                        <Route  path="/preview">
                            <Preview />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
