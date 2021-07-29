import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <MainPage/>
        </Route>
        <Route>
          <NotFoundPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
