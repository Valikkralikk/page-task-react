import { useEffect } from 'react';

import Header from './components/Header/Header';
import MainContainer from './components/MainContainer/MainContainer';
import { useStoreState } from './store';
import { getAllCards } from './services';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const cards = useStoreState('cards');

  useEffect(() => {
    getAllCards()
  }, [])

  return (
    <BrowserRouter basename={'/'}>
      <div className="App">
        <Header />
        <MainContainer cards={cards} />
      </div>
    </BrowserRouter>
  );
}

export default App;
