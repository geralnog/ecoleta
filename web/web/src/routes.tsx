import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import home from './pages/home';
import createpoint from './pages/createpoint';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={home} path="/" exact />
            <Route component={createpoint} path="/create-point"/>

        </BrowserRouter>
    );
}

export default Routes;