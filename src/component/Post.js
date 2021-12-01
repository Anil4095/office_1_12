import React, { useEffect, useState } from 'react'
import '../App.css';

const Post=()=> {
    const [users, setUsers] = useState([])

    const getUsers= async()=>{
      const res= await fetch("https://api.github.com/users");
            setUsers(await res.json());
          
    }
    useEffect(()=>{
        getUsers();
    },[])
    return (
        <>
       <div className="grid-div">
        <div className={{backgroundColor:"gray"}}>
        <h1>List Of GitHub User</h1> 
           <div className="container-fluid mt-5">
               <div className="row text-center">

                   {
                       users.map((curEle)=>{
                           const {avatar_url,id, login, type,node_id}= curEle;
                          return(
                              
                            <div className="col-10 col-md-4 mt-5"  key={id}>
                            <div className="card p-2">
                                <div className="d-flex align-items-center">
                                    <div className="image"><img  src={avatar_url} className="rounded" width="155"  alt="ApiImg"/></div>
                                    <div className="ml-3 w-100" >
                                       <h4 className="mb-0 mt-0 textLeft">{login}</h4>
                                       <span className="textLeft">{type}</span>  
                                       <div className="p-2 m-2 bg-primary d-flex justify-content-between rounded  text-white stats">
                                           <div className="d-flex flex-column"><span className="articles">{node_id}</span><span className="number1">38</span></div>
                                           <div className="d-flex flex-column"><span className="followers">Followers</span><span className="number2">980</span></div>
                                           <div className="d-flex flex-column"><span className="rating">Rating</span><span className="number3">9.8</span></div>
                                       </div>
                                    </div>
                                </div>
                            </div>
                         </div>
                          )
                       })
                   }
                   
               </div>
               </div> 
               </div>
               </div>
        </>
    )
}

export default Post
