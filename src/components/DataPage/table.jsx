import {useEffect,useState} from 'react'
import { collection, getDocs } from "firebase/firestore";
import db from '../Firebase/firebaseConfig'


export default function Table(params){
    const [lst,setLst]=useState([]);
    
    useEffect( ()=>{
        var dataa=[];
        const get_data = async () => {
            const querySnapshot = await getDocs(collection(db.db, params.coll));
            querySnapshot.forEach((doc) => {
                dataa.push(doc.data());
                setLst(dataa);
            });
        }
    get_data();
    },[]);


    return(
        <div class="py-5" style={{"color":"white"}}>
        <center><h1>{params.coll}</h1></center>
        <table class="table" style={{"color":"white"}}>
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Number</th>
            <th scope="col">College</th>
            </tr>
        </thead>
        <tbody>
{
        lst.map((data, key) => {
            return(

            <tr>
                <th scope="row">{key+1}</th>
                <td>{data.Name}</td>
                <td>{data.Email}</td>
                <td>{data.Number}</td>
                <td>{data.College}</td>
            </tr>
            
        );})
        
    }
        </tbody>
    </table>
    </div>
    )
}