import React, {FC, useState } from "react";
import {IState as Props} from "../App"

interface IProps {
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
  people: Props["people"]
  person?:{
    name:string
    age:number
    url:string
    note?:string
  }
}


const List: FC<IProps> = ({setPeople,people}) => {

  const hadleXButton = (param:IProps["person"]) => (e: any) => {
    
    var place = -1;
    
    people.map( function (person:IProps["person"], index:number) {
      if (person?.name === param?.name
        && person?.age === param?.age){
          place=index;
        }
        
      })

    var array = [...people]; // make a separate copy of the array
    if (place !== -1) {
      array.splice(place, 1);
      setPeople(array);

    }
//     setPeople([
//       ...people,
//       {
//           name:param.name,
//           age: 12,
//           url: "input.img",
//           note: "input.note"
//       }
//   ]);
  
  }

  const renderList = () =>{
    return people.map( person => {
      return(
        <li className="List">
          <div className="List-header">
              <img className="List-img" src={person.url} alt={person.name+" Image"}/>
              <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className="List-note">{person.note}</p>
          <button type="button" className="btn-close" aria-label="Close"
            onClick = {hadleXButton(person)}
          >
          </button>

        </li>
      )
    })

  }

  return (
    <ul>
      {renderList()} 
    </ul>
  );
}

export default List;