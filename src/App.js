import { useState } from 'react';

import GenBG from './assets/images/gen_bg.jpg';

import Form from './components/Form';

function App() {
  return (
    <div 
    className="App min-h-screen box-border px-10 bg-center bg-no-repeat bg-cover bg-opacity-25 md:px-24 xl:px-40 2xl:px-72"
    style={{backgroundImage: `url(${GenBG})`}}
    >
      <Form />
    </div>
  );
}

export default App;
