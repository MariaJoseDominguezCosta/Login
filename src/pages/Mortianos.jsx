import React, { useState, useEffect, useContext } from 'react';
import Card from '../components/Card';
import StateContext from '../context/StateContext';
function Mortianos (){
    const [data, setData]= useState(null)
    const [pages, setPages]=useState(1);
    const value= useContext(StateContext);

    useEffect(function(){
        fetch(`https://rickandmortyapi.com/api/character/?page=${pages}`)
        .then(response=>response.json())
        .then(data=> setData(data))
        .catch(err=>console.log(err))
    },[pages])
  return value.isLogged ? (
    <div className="container_characters">
        <button onClick={()=>setPages(pages+1)}>Next</button>
        <button onClick={()=>setPages(pages-1)}>Prev</button>
        {
            data && data.results.map(character=>(
                <Card 
                key={character.id}
                name={character.name}
                image={character.image}/>
            ))
        }
    </div>
  ):<h1>No pasas</h1>;
}
export default Mortianos;