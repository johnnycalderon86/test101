import React from 'react'
import { useQuery } from 'react-query'
import Planet from './Planet'

  const fetchPlanets = async ()=>{
        const res =await fetch(`https://swapi.dev/api/${endpoint}/`);
        return res.json()
    }
    const endpoint = 'planets'
export default function Planets() {
  
    const {data, status}= useQuery(endpoint, fetchPlanets)
    console.log(data);
    return (
        <div>
            <h2>The Planets</h2>

            {/* <p>{status}</p> */}
            {status === 'loading' && (
                <div> Loading data...</div>
            )}
            {status === 'error' && (
                <div> Error Fetching Data</div>
            )}
            {status === 'success' && (
                <div>{data.results.map(planet=><Planet key={planet.name} planet={planet}/>)}</div>
            )}
        </div>
    )
}
