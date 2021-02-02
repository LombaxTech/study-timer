import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Test from "./Test";
import Charts from "./Charts";
import Rechart from "./Rechart";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/test" exact component={Test} />
                <Route path="/charts" exact component={Charts} />
                <Route path="/recharts" exact component={Rechart} />
            </Switch>
        </Router>
    );
}
