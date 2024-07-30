import { useEffect, useState } from "react";
import { HOUSES_API } from "./API";
import House from "./House";

export default function Houses(){

    const [houses, setHouses] = useState([]);


    useEffect(()=>{
        fetch(HOUSES_API)
        .then(res=>res.json())
        .then(houses=>{
            console.log(houses)
            setHouses(houses)
        })
    },[])


    return(
        <>
        <table>
            <th>
            <tr>Name</tr>
            </th>
            <tbody>
                {houses.map(house=> (<House key={house.name} name={house.name} url={house.url} />))}
            </tbody>
        </table>
       
        </>
    )
}
