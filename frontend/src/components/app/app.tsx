import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import MainPage from '#domains/main/pages/main-page/main-page';

const App: FC = () => {
  return (
    <Switch>



      {/* MainRoutes */}

      <Route exact path={`/`}>
        <MainPage />
      </Route>

      <Route>
        <Redirect to={`/`} />
      </Route>
    </Switch>
  );
};

export default App;
