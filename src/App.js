import { useState } from 'react';

import GenBG from './assets/images/gen_bg.jpg';

import Form from './Components/Form';
import Items from './Components/Items';

function App() {
  return (
    <div 
    className="App min-h-screen bg-gradient-to-r from-purple-600 to-purple-800 box-border px-10 bg-center bg-no-repeat bg-cover bg-opacity-75 md:px-24 xl:px-40"
    style={{backgroundImage: `url(${GenBG})`}}
    >
      <Form />
      <Items />
    </div>
  );
}

export default App;
