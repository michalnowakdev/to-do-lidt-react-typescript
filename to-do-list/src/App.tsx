import React, { FunctionComponent } from 'react';

import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';

const App: FunctionComponent<{}> = (props) => {
  return (
    <>
      <NavBar />
      <HomePage />
    </>
  )

}

export default App;
