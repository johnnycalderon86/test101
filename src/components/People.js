import React from 'react'
import { useQuery } from 'react-query'
import Person from './Person'

  const fetchPeople = async ()=>{
        const res =await fetch(`https://swapi.dev/api/${endpoint}/`);
        return res.json()
    }
    const endpoint = 'people'
export default function Planets() {
  
    const {data, status}= useQuery(endpoint, fetchPeople)
    console.log(data);
    return (
        <div>
            <h2>The People</h2>

            {/* <p>{status}</p> */}
            {status === 'loading' && (
                <div> Loading data...</div>
            )}
            {status === 'error' && (
                <div> Error Fetching Data</div>
            )}
            {status === 'success' && (
                <div>{data.results.map(person=><Person key={person.name} person={person}/>)}</div>
            )}
        </div>
    )
}
