import React, { useState } from "react";
import {urlApi} from "../constants/urls"

const ItemOperation = ({ dataEl }) => {
  /*     console.log(dataEl._id);
   */ 
  const { concept, mount,  date } = dataEl;
  const [updateConcept, setUpdateConcept] = useState(concept);
  const [updateMount, setUpdateMount] = useState(mount);
/*   const [updateType, setUpdateType] = useState(type);
 */  const [updateDate, setUpdateDate] = useState(date);

  const [modify, setModify] = useState(false);
  function handleClick() {
    if (updateConcept || updateMount) {
      fetch(`${urlApi}put-operation/${dataEl._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          concept: updateConcept,
          mount: updateMount,
          date: updateDate,
         
        }),
      }).then((res) => res.json())
      .then(res => {
        if(res.ok) window.location.reload();
    });
      
    }
  }

  function handleDelete(){
    fetch(`${urlApi}delete-operation/${dataEl._id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({id: dataEl.id})
    }).then(res => res.json())
    .then(res => {
        if(res.ok) window.location.reload();
    });
  }

  return (
      <>
    <div onClick={() => setModify(true)}>
      {modify ? (
        <>
          <div className="form row  mx-auto  ">
            <div className=" bg-white p-5 col">
              <div className=" line"></div>
              <div className="mb-3 mx-auto col-lg-8 formulario">
                <input
                  type="text"
                  onInput={(e) => {
                    setUpdateConcept(e.target.value);
                  }}
                  className="form-control "
                  placeholder={concept}
                />
              </div>
              <div className="mb-3 mx-auto col-lg-8">
                <input
                  type="number"
                  onInput={(e) => {
                    setUpdateMount(e.target.value);
                  }}
                  className="form-control "
                  placeholder={mount}
                />
              </div>
              <div className="  mb-3 mx-auto col-lg-8">
                <label type="text" className="form-label tre ">
                  Date {date.substring(0, 10)}{" "}
                </label>
                <input
                  type="date"
                  placeholder={date}
                  onInput={(e) => {
                    setUpdateDate(e.target.value);
                  }}
                  className="form-control "
                />
              </div>
            </div>
          </div>
        </>
      ) : 
      
      
      (
        <div className="">
          <div className="card-body row ">
            
            {dataEl.type==="EGRESS"?
            <>
            <h5 className=" text-capitalize col-lg-3 col-sm-6 text-secondary"> {dataEl.concept}: </h5>
             <h4 className="text-danger col-lg-3 col-sm-6" >${dataEl.mount}</h4>
             <p className="card-text text-danger col-lg-3 col-sm-6">{dataEl.type}</p>
             </>
             :
             <>
            <h5 className="text-capitalize col-lg-3 col-sm-6"> {dataEl.concept}: </h5>
             <h4 className="text-success col-lg-3 col-sm-6" >${dataEl.mount}</h4>
             <p className="card-text text-success col-lg-3 col-sm-6">{dataEl.type}</p>
             
             </>
          }

            <p className="card-text text-secondary col-lg-3 col-sm-6">
               {dataEl.date.substring(0, 10)}
            </p>
           
          </div>
        </div>
      )}
    </div>
      {modify ? (
        <div>
        <button className="btn btn-primary publicar-btn" onClick={handleClick}>
          Upload
        </button>
        <button className="btn btn-danger publicar-btn"   onClick={handleDelete} >Delete</button>

        </div>
      ) : (
        <></>
/*         <button className="btn btn-danger publicar-btn"   onClick={handleDelete} >Delete</button>
 */      )}
      </>
  );
};
export default ItemOperation;
