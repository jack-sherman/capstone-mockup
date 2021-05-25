import { useState } from "react";
import "./App.css";
import ShowingsPage from "./components/ShowingsPage";
import DoorList from "./components/DoorList";
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Cart from './features/cart/Cart';
import Navbar from './app/Navbar';

import {
     BrowserRouter as Router,
     Switch,
     Route,
     Redirect,
} from 'react-router-dom';

function App() {

    const [doorList, setDoorList] = useState(false);

    const showings = <ShowingsPage showingSelected={() => setDoorList(!doorList)} />;

    return (
        <Router>
            <Navbar />
            <div id="maincontainer">
                <Switch>
                    <Route
                        exact
                        path="/"
                    >
                        <CssBaseline />
                        {!doorList && showings}
                        {doorList && [
                            <DoorList />,
                            <Button variant="contained" color="primary" onClick={() => setDoorList(false)}>Back</Button>
                        ]}
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
