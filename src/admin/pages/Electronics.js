import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { Link } from "react-router-dom";
export default function Electronics() {

  //fetch 
  const [data,setData] = useState([]);
  const datafetch = async () =>{
    try{
      const response = await fetch("http://localhost:8000/api/user/electronicfetch");
      const firstdata = await response.json();
      setData(firstdata);
    }catch(error){
      console.error("Error fetching data:",error)
    }
  }

  useEffect(()=>{
      datafetch();    
  },[]);
  

  
  // const handleDelete = (id) => {
  //   // Perform the delete action using the 'id'
  //   // You can use 'id' to filter the items array and remove the item with the matching ID
  //   const updatedItems = items.filter(item => item._id !== id);
  //   setItems(updatedItems); // Update the state with the modified array
  // };
  

  //delete 
  const [deletedItemId, setDeletedItemId] = useState(null);

  const handleDeleteItem = (itemId) => {
    fetch(`http://localhost:8000/api/user/elecitemdelete/${itemId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setDeletedItemId(itemId);
        } else {
          console.error('Failed to delete item.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };




  // update 
  const [upeleitem,setUpeleitem] = useState("")
  const [upelebrand,setUpelebrand] = useState("")
  const [upeleprice,setUpeleprice] = useState("")
  const [upelequentity,setUpelequentity] = useState("")
  const [items, setItems] = useState([]);

  const sendData = async() =>{
    try{
      const user = {
        upeleitem:upeleitem,
        upelebrand:upelebrand,
        upeleprice:upeleprice,
        upelequentity:upelequentity
      };
      
      const data = await fetch("http://localhost:8000/api/user/elecupdate",{
        method:"put",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(user),
      });
    }catch{}
  };
  
  const upeleitem1 = (e) =>{
    const value = e.target.value;
    setUpeleitem(value)
  };

  const upelebrand1 = (e) =>{
    const value = e.target.value;
    setUpelebrand(value)
  };
  
  const upeleprice1 = (e) =>{
    const value = e.target.value;
    setUpeleprice(value)
  };
  
  const upelequentity1 = (e) =>{
    const value = e.target.value;
    setUpelequentity(value)
  };
  return (
    <>
      <Header />
      <Sidebar />
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-4 col-3">
              <h4 className="page-title">Electronics's Item</h4>
            </div>
            <div className="col-sm-8 col-9 text-right m-b-20">
              <Link
                to="/admin-page/AddElectronics"
                className="btn btn-primary float-right btn-rounded"
              >
                {" "}
                <i className="fa fa-plus"></i> Add Items
              </Link>
            </div>
          </div>
          <div className="row filter-row">
            <div className="col-sm-6 col-md-3">
              <div className="form-group form-focus">
                <label className="focus-label">Product Name</label>
                <input type="text" className="form-control floating" />
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="form-group form-focus">
                <label className="focus-label">Brand Name</label>
                <input type="text" className="form-control floating" />
              </div>
            </div>

            <div className="col-sm-6 col-md-3">
              <a href="#" className="btn btn-success btn-block">
                {" "}
                Search{" "}
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-striped custom-table">
                  <thead>
                    <tr>
                      <th style={{ minWidth: "200px" }}>Items Name</th>
                      <th> Brand Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th className="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((topic,index) =>(
                    <tr key={index}>
                      <td>
                        <img
                          width="28"
                          height="28"
                          src="../assets/img/user.jpg"
                          className="rounded-circle"
                          alt=""
                        />{" "}
                        <h2>{topic.name}</h2>
                      </td>
                      <td>{topic.brand}</td>
                      <td>{topic.price}</td>
                      <td>{topic.quantity}</td>

                      <td className="text-right">
                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa fa-ellipsis-v"></i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                          <a                            
                              className="dropdown-item"                            
                              data-toggle="modal"
                              data-target="#exampleModalCenter"
                            >
                              <i className="fa fa-pencil m-r-5"></i> Edit
                            </a>
                            {/* <a
                              className="dropdown-item"
                              // href={`/elecitemdelete/$topic._id`}
                              data-toggle="modal"
                              data-target="#delete_employee"
                            > */} 
                            <Link onClick={() => handleDeleteItem(topic._id)}className="dropdown-item" data-toggle="modal" data-target="#delete_employee">
                              <i className="fa fa-trash-o m-r-5"></i>{topic._id} Delete
                              </Link> 
                            {/* </a> */}
                          </div>
                        </div>
                      </td>
                    </tr>
                    ))}
                    {/* <tr>
                      <td>
                        <img
                          width="28"
                          height="28"
                          src="../assets/img/user.jpg"
                          className="rounded-circle"
                          alt=""
                        />{" "}
                        <h2>laptop/ Desktop</h2>
                      </td>
                      <td>HP</td>
                      <td>55,000</td>
                      <td>12</td>

                      <td className="text-right">
                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa fa-ellipsis-v"></i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                          <a                            
                              className="dropdown-item"                            
                              data-toggle="modal"
                              data-target="#exampleModalCenter"
                            >
                              <i className="fa fa-pencil m-r-5"></i> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_employee"
                            >
                              <i className="fa fa-trash-o m-r-5"></i> Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr> */}
                    {/* <tr>
                      <td>
                        <img
                          width="28"
                          height="28"
                          src="../assets/img/user.jpg"
                          className="rounded-circle"
                          alt=""
                        />{" "}
                        <h2>laptop/ Desktop</h2>
                      </td>
                      <td>Dell</td>
                      <td>65,000</td>
                      <td>15</td>
                      <td className="text-right">
                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa fa-ellipsis-v"></i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a                            
                              className="dropdown-item"                            
                              data-toggle="modal"
                              data-target="#exampleModalCenter"
                            >
                              <i className="fa fa-pencil m-r-5"></i> Edit
                            </a>
                            
                            
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_employee"
                            >
                              <i className="fa fa-trash-o m-r-5"></i> Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="notification-box">
          <div className="msg-sidebar notifications msg-noti">
            <div className="topnav-dropdown-header">
              <span>Messages</span>
            </div>
            <div class="drop-scroll msg-list-scroll" id="msg_list">
              <ul className="list-box">
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">R</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">Sandeep Miles </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix"></div>
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item new-message">
                      <div className="list-left">
                        <span className="avatar">J</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">Abcd</span>
                        <span className="message-time">1 Aug</span>
                        <div className="clearfix"></div>
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">T</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author"> Taran </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix"></div>
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="topnav-dropdown-footer">
              <a href="chat.html">See all messages</a>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
  <form action="">
    <div className="modal-content">  
      <div className="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <div className="content">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h4 className="page-title">Edit items</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Item Name <span className="text-danger">*</span></label>
                                        <input class="form-control" type="text" onChange={upeleitem1} value={upeleitem}/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Brand Name</label>
                                        <input class="form-control" type="text" onChange={upelebrand1} value={upelebrand}/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Price <span className="text-danger">*</span></label>
                                        <input class="form-control" type="text" onChange={upeleprice1} value={upeleprice}/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Quantity <span className="text-danger">*</span></label>
                                        <input class="form-control" type="number" onChange={upelequentity1} value={upelequentity}/>
                                    </div>
                                </div>
                                
                                
                                
                            </div>
                           
                            {/* <div className="m-t-20 text-center">
                                <button className="btn btn-primary submit-btn">Edit List</button>
                            </div> */}
                    </div>
                </div>
            </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={sendData}>Save changes</button>
      </div>
      </div>
    </form>

  </div>
</div>
    </>
  );
}
