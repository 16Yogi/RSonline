import React, { useState } from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'

export default function AddElec() {

    const [name,setName] = useState("")
    const [brand,setBrand] = useState("")
    const [price,setPrice] = useState("")
    const [quantity,setQuantity] = useState("")

    const sendData = async ()=>{
       try{
        const elec = {
            name:name,
            brand:brand,
            price:price,
            quantity:quantity
        };
        const data = await fetch("http://localhost:8000/api/user/electronicitem",{
            method:"post",
            headers:{
              "Content-Type":"application/json",
            },
            body:JSON.stringify(elec),
          });
        }catch{}
    };

    const name1 = (e) =>{
        const value = e.target.value;
        setName(value)
    };
    const brand1 = (e) =>{
        const value = e.target.value;
        setBrand(value)
    };
    const price1 = (e)=>{
        const value = e.target.value;
        setPrice(value)
    };
    const quantity1 = (e)=>{
        const value= e.target.value;
        setQuantity(value)
    }

  return (
    <>
    <Header />
    <Sidebar />
    <div className="page-wrapper">
            <div className="content">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h4 className="page-title">Add Electronics</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <form action="">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Item Name <span className="text-danger">*</span></label>
                                        <input class="form-control" type="text"  onChange={name1} value={name} required/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Brand Name</label>
                                        <input class="form-control" type="text"  onChange={brand1} value={brand} required/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Price <span className="text-danger">*</span></label>
                                        <input class="form-control" type="text"  onChange={price1} value={price} required/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Quantity <span className="text-danger">*</span></label>
                                        <input class="form-control" type="number"  onChange={quantity1} value={quantity} required/>
                                    </div>
                                </div>
                                
                                
                                
                            </div>
                            
                            <div className="m-t-20 text-center">
                                <button className="btn btn-primary submit-btn" onClick={sendData}>Create Item List</button>
                            </div>
                        </form>
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
                                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
    </>
  )
}
