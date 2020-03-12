import React from 'react';
import '../index.css';
import App from '../App';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Error from '../pages/error';

const Routes = () => {
    return (
    <>
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="https://github.com/PraveenKumarPalai"/>
                <Route component={Error} />
            </Switch>
        </Router>
    </>
  )
}

export default Routes;
