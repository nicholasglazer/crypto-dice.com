import React from "react";
import { DrizzleContext } from "@drizzle/react-plugin";
import { Drizzle } from "@drizzle/store";
import drizzleOptions from "./drizzleOptions";
import Dice from "./Dice";
import store from './middleware'

const drizzle = new Drizzle(drizzleOptions, store);

const App = () => {
  return (
    <DrizzleContext.Provider drizzle={drizzle} >
      <DrizzleContext.Consumer>
        {drizzleContext => {
          const { drizzle, drizzleState, initialized } = drizzleContext;

          if (!initialized) return "Loading..."

          return <Dice drizzle={drizzle} drizzleState={drizzleState} />
        }}
      </DrizzleContext.Consumer>
    </DrizzleContext.Provider>
  );
}

export default App;
