import React, { useState } from "react";
import AddToList from "./Components/AddToList";
import List from "./Components/List";


export interface IState {
  people:{
    name:string
    age:number
    url:string
    note?:string
  }[]
}

 function App(){
 
  const [people, setPeople] = useState<IState["people"]> ([
    {
      name: "Lebron James",
      url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      age: 25,
      note: "Tall"
    }
  ]);

  

    return (
      <div className="text-center">
        <h1 style={{color:'grey'}}>People Invited to the Party :</h1>
        <List 
          people = {people}
          setPeople = {setPeople}    
        />
    
        <AddToList 
          people = {people}
          setPeople = {setPeople}
        />
      </div>
    );
  
}

export default App;
