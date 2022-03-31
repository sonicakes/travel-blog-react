import React from 'react';
import Card from './components/Card';
import Header from "./components/Header";
import data from './data';

function App() {
const cards = data.map( card => 
  <Card 
  key = {card.id}
  card = {card}
  />
  
  )

  return (
    <div className="container">
      <Header />
      {cards}
    </div>
  );
}

export default App;
