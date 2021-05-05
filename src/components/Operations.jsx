import React,{useState} from 'react';
import {Navbar} from "./Navbar"
import {urlApi} from "../constants/urls"


const Operations = () => {
const [mount, setMount] = useState()
const [concept, setConcept] = useState()
const [type, setType] = useState("EGRESS")
const [date, setDate] = useState()

    function handleClick(){
        if(mount && concept && date && type){
            fetch(`${urlApi}post-operation`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({mount, concept, date, type})
            }).then(res => res.json())
            .then(res => {
                 window.location.reload();
            });
        }
    }

    return (
  <div>
  <Navbar/>
    <div  className=" form mx-auto w-50 bg-white p-5 col" >
            <div ></div>
            <div className="mb-3 col-lg-12 formulario">
                <label  className="form-label tre " id="">Concept</label>
                <input type="text"  onInput={(e) => setConcept(e.target.value)} className="form-control " required/>
            </div>
            <div className="mb-3 col-lg-12">
                <label className="form-label tre ">Mount</label>
                <input type="number" onInput={(e) => setMount(e.target.value)}  className="form-control " required/>
            </div>
            <div className="mb-3 col-lg-12">
                <label type="text" className="form-label tre ">Date</label>
                <input type="date"  onInput={(e) => setDate(e.target.value)} className="form-control " required/>
            </div>

            <div className="mb-3 col-lg-12">
                <label className="form-label tre ">Type </label>
                <select defaultValue="EGRESS" onChange={(e) => setType(e.target.value)} >
                    <option value="ENTRY">Entry</option>
                    <option value="EGRESS">EGRESS</option>
                </select>      
              </div>
            <div>
                <button type="button" onClick={handleClick} className="btn btn-secondary publicar-btn" >Post</button>
              
            </div> 
    </div>
    <hr/>
 </div>
);
}

export default Operations;