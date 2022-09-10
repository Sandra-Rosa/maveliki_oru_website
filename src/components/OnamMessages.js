import React from 'react'
import '../App.css'
import onam14 from '../onam14.png'
import onam15 from '../onam15.png'
import onam16 from '../onam16.png'
function OnamMessages(){
    return(
      <div className='onammessages'>
       <img src={onam14} className="onamimage1"></img>
       <br></br>
       <img src={onam15} className="onamimage1"></img>
       <br></br>
       <img src={onam16} className="onamimage1"></img>
      </div>
    );
}
export default OnamMessages;