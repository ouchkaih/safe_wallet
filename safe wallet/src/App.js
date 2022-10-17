import React  from 'react';
import Home_page from './components/homepage';
import Nav_bar from './components/navebar';
import CreateCard from './create_card/createCard';
import Money_tracker from './money_tacker/money_tracker';

function App() {
  return (
    <div >
      <Nav_bar/>
      <Home_page/>
      <CreateCard/>
      <Money_tracker/>
    </div>
  );
}

export default App;
