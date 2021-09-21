import React, { useState } from 'react';
import Loader from 'react-loader-spinner';
import {
  Redirect,
  Route,
  Switch,
} from 'react-router';
import { Details } from './components/Details/Details';
import { HomePage } from './components/HomePage/HomePage';

export const App: React.FC = () => {
  const [goodForDetails, setGoodForDetails] = useState<Good | null>(null);
  const [url, setUrl] = useState('');

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <HomePage setGoodForDetails={setGoodForDetails} setUrl={setUrl} />
        </Route>

        <Route path={`/${url}`}>
          {goodForDetails
            ? <Details good={goodForDetails} />
            : <Loader type="TailSpin" />}
        </Route>

        <Redirect
          to="/"
        />
      </Switch>
    </div>
  );
};
