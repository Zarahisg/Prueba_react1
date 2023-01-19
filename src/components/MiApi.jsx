
import { useEffect, useState } from "react";

const MiApi = () => {

    const [locations,setLocations] = useState([]);
    const [search,setSearch]= useState('')

    const getData = async () => {
       const res= await fetch (`https://rickandmortyapi.com/api/location`)
       const data = await res.json();
       setLocations(data.results);
    };
   

  useEffect (() => {
    getData();
  },[])
  return (
    <div>
        <h3 className="text-primary text-center">
            Elige tu locación Favorita</h3>
        <input 
        className="input-group mb-3"
        type="text"
        placeholder="buscar..." 
        onChange={(e) => setSearch(e.target.value)} 
        value= {search}
         />

        <ul className="p-3 mb-2 bg-info text-dark text-center">
        {locations
        .filter((x)=> x.name.toLowerCase().includes(search.toLowerCase()))
        .map((item) => (
           <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    </div>
  );
  };
  export default MiApi;