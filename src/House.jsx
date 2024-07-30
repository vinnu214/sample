import { useNavigate } from "react-router-dom"

export default function House({name,url}){
    const navigate = useNavigate();

    const fetchHouseDetails = (url) => {
        fetch(url)
        .then(res => res.json())
        .then(houseDtls=>{
            const houseURL = url.split("/api/")[1];
            navigate(houseURL)
            console.log(houseDtls)
        })
        .catch(err=>{
            navigate('no-details')
        })
    }

    return (
        <td onClick={()=>fetchHouseDetails(url)}>{name}</td>
    )
}