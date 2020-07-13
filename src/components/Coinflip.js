import React, { Component } from 'react'

class Coinflip extends React.Component {
constructor(props) {
   super(props);
   this.state = {
     result: "",
     nader: "nader"
   };
   this.coinToss = this.coinToss.bind(this);
 }
 coinToss() {
   this.setState({ nader: "" }, () => {
     if (Math.random() < 0.5) {
       this.setState({ result: "heads" });
       console.log("heads");
     } else {
       this.setState({ result: "tails" });
       console.log("tails");
     }
   });
 }

 render() {
   return (
     <div className="App">
       <div id="coin" className={this.state.result} key={+new Date()}>
         <div class="side-a">
           <h2>TAIL</h2>
         </div>
         <div className="side-b">
           <h2>HEAD</h2>
         </div>
       </div>
       <h1>Flip a coin</h1>
       <button id="btn" onClick={this.coinToss}>
         Coin Toss
       </button>
     </div>
   );
 }
}

{/*const { useState } = React

function Coinflip() {
    const [side, setSide] = useState(1)
    const [heads, setHeads] = useState(0)
    const [tails, setTails] = useState(0)

    const tossed = heads + tails

    const tossCoin = () => {
        const landedOn = Math.round(Math.random())
        if (landedOn === 1) {
            setHeads(heads + 1)
        } else {
            setTails(tails + 1)
        }

        setSide(landedOn)
    }

    return (
      <div>
         <p>The coin has been tossed {tossed} times.</p>
         <p>It landed on {side === 1 ? "heads" : "tails"}</p>

         <ul id="coin">
             <li>
                 <label htmlFor="heads">Heads: {heads}</label>
                 <meter class="side-a heads" id="heads" value={heads} max={tossed} />
             </li>
             <li>
                 <label htmlFor="tails">Tails: {tails}</label>
                 <meter class="side-b tails" id="tails" value={tails} max={tossed} />
             </li>
         </ul>

         <button onClick={tossCoin}>Toss coin</button>
       </div>
    )
}*/}

export default Coinflip
