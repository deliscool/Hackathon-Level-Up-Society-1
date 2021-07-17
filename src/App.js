import React, { useState, useEffect } from 'react'
import Goals from './components/Goals';
import SideNavBar from './components/SideNavBar';

function App() {
  return (
    <div className="App">
      <SideNavBar />
      <Goals />
    </div>
  );
}

export default App;
