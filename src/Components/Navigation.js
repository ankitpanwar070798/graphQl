import React ,{useState} from "react";
import { GET_USER_DATA } from "../Graphql/queries";
import { useLazyQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import './NavigationStyle.css';
const Navigation = () => {
  const param = useParams();
  const[searchChar, setChar]= useState("");


  const [loadGreeting, { called, loading, data }] = useLazyQuery(GET_USER_DATA);
  if (called && loading) return <p>Loading...</p>;
  if (!called) {
    return loadGreeting();
  }
  const value = data.episodes.results;

  let idValue = param.id;

  let particularElement = value.filter((ele) => {
    return ele.id === idValue;
  });


const handleChange=(event) => {
    setChar(event.target.value);
}


  return (
    <>
      <section >
        <h1 className="header">Character's with their Image</h1><hr/>

        <div >
          {particularElement.map((element, index) => (
            <div key={index}>
              <div className="episodeId">
                <h3>
                  {" "}
                  ID : <span> {element.id} </span>
                </h3>

                <h4>
                  {" "}
                  Episode Name : <span> {element.name}</span>
                </h4>
                <span className="searchName"> Character Name:- <input className="searchinput" type="text" placeholder="Search" onChange={handleChange}/></span>
                <hr/>
                
              </div>

<div>
    {element.characters.filter((val)=>{
        if(searchChar===""){
            return val
        }
        else if (val.name.toLowerCase().includes(searchChar.toLowerCase())){
            return val
        } return null
    }).map((ele, inde) => (
                  <div className="character" key={inde}>
                    <h3 className="charData">
                      {" "}
                      Id : <span>{inde + 1}</span>
                    </h3 >

                    <h3 className="charData">
                      {" "}
                      Character Name : <span>{ele.name}</span>
                    </h3>

                    <img className="imageData" src={ele.image} alt=""></img>
                <hr/> </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Navigation;
