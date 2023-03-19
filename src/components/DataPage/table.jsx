import {useEffect,useState} from 'react'
import { collection, getDocs } from "firebase/firestore";
import db from '../Firebase/firebaseConfig'
import timestamp from '../Firebase/firebaseConfig'
import { useRef } from "react";
import { useDownloadExcel } from "react-export-table-to-excel";
import './table.css'

export default function Table(params){
    const [lst,setLst]=useState([]);
    const tsmp = Date(timestamp)
    const tableRef = useRef(null);

    const { onDownload } = useDownloadExcel({
      currentTableRef: tableRef.current,
      filename: `${params.coll} ${tsmp}`,
      sheet: `${params.coll}`
    });    

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
        <center><h1>{params.coll}</h1><button onClick={onDownload}> Export excel </button></center>
        <table class="table"  ref={tableRef}>
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Number</th>
            <th scope="col">College</th>
            <th scope="col">Entry</th>
            <th scope="col">Referral</th>
            {/* {params.fields.map((data2, key) => {console.log(data2)
                    return(<th scope="col">{data2.title}</th>)
                ;})}             */}
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
                <td>{data.Entry}</td>
                <td>{data.Referral}</td>
                {/* {params.fields.map((data2, key) => {console.log(data2)
                    return(<td>{data.College}</td>)
                ;})}    */}
            </tr>
            
        );})
        
    }
        </tbody>
    </table>
    </div>
    )
}