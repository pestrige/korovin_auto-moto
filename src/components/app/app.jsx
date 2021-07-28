import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../pages/main/main';
import NotFound from '../pages/not-found/not-found';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Main/>
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
