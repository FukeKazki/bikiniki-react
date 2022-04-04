import React from 'react';
import { CounterProvider } from "./state/Counter";
import { Counter } from "./components/Counter";
import { CounterB } from "./components/CounterB";
import './App.css';
import { RecoilRoot } from "recoil";
import {ToggleA} from "./components/ToggleA";
import {ToggleB} from "./components/ToggleB";

function App() {
  return (
    <div className="App">
        <RecoilRoot>
            A:<ToggleA/>
            B:<ToggleB/>
        </RecoilRoot>
        <div>
            あは
        </div>
        <CounterProvider>
            A:<Counter/>
            B: <CounterB/>
        </CounterProvider>
    </div>
  );
}

export default App;
