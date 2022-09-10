import React, { Component } from 'react';
import './App.css';
import maveli from './maveli.png'
import { useState } from 'react';
import WhatIsOnam from './components/WhatIsOnam.js'
import WhenIsOnam from './components/WhenIsOnam.js'
import LegendsOfOnam from './components/LegendsOfOnam';
import OnamCelebrations from './components/OnamCelebrations';
import TenDaysOfOnam from './components/TenDaysOfOnam';
import OnamMessages from './components/OnamMessages';
import CustomsOfOnam from './components/CustomsOfOnam';
function App() {
  const [state, setState] = useState('');
  let Component;
  if(state=='whenisonam'){
    Component = <WhenIsOnam/>
  }
   else if (state === 'whatisonam') {
    Component = <WhatIsOnam />
  }
  else if(state === 'legendsofonam'){
    Component = <LegendsOfOnam/>
  }
  else if(state==='onamcelebrations'){
    Component=<OnamCelebrations/>
  }
  else if(state === 'tendaysofonam'){
    Component=<TenDaysOfOnam/>
  }
  else if(state==='onammessages'){
    Component=<OnamMessages/>
  }
  else if(state==='customsofonam'){
    Component=<CustomsOfOnam/>
  }
  return (
    <div className="App">

      <div className='wholepage'>
        <div className="navbar">
          <button className="buttonnav" onClick={() => {setState('whatisonam')}}>| എന്താണ് ഓണം? |</button>
          <button className="buttonnav" onClick={() => {setState('whenisonam')}}>| എപ്പോഴാണ് ഓണം? |</button>
          <button className="buttonnav" onClick={() => {setState('legendsofonam')}}>| ഓണത്തിന്റെ ഐതിഹ്യങ്ങൾ |</button>
          <button className="buttonnav" onClick={() => {setState('onamcelebrations')}}>| ഓണാഘോഷം  |</button>
          <button className="buttonnav" onClick={() => {setState('tendaysofonam')}}>| ഓണത്തിന്റെ പത്തു ദിവസം |</button>
          <button className="buttonnav" onClick={() => {setState('onammessages')}}>| ഓണസന്ദേശങ്ങൾ |</button>
          <button className="buttonnav" onClick={() => {setState('customsofonam')}}>| ഓണത്തിന്റെ ആചാരങ്ങൾ |</button>
        </div>
        <span className="heading1">ഇമ്മക്കും വേണ്ടേ ഒരു വെബ്സൈറ്റ്...</span>
        <div className='middle'>
        <span className='homecontent'>
          പ്രതീക്ഷകളുടെ പൂവിളികളുമായാണ് ഓരോ ഓണവും മലയാളികളെ തേടി വരുന്നത്. മലയാളത്തിന്റെ പുതുവർഷമയും കാർഷിക ഉത്സവങ്ങളുടെ ആഘോഷമായും പൊന്നിൻ ചിങ്ങത്തെ കരുതി വരുന്നു. പരിധികളില്ലാത്ത സന്തോഷവും അതിരുകളില്ലാത്ത ആഘോഷവും ഓണക്കാലത്തിൻറെ പ്രത്യേകതകളാണ്.
        </span>
        </div>
        {Component}
      </div>
    </div>
  );
}

export default App;
