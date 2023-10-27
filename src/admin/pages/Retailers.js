import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
export default function Retailers() {

    const [ReFname,setReFname] = useState("")
    const [ReLname,setReLname] = useState("")
    const [ReAge,setReAge] = useState("")
    const [ReEmail,setReEmail] = useState("")
    const [ReDob,setReDob] = useState("")
    const [ReGender,setReGender] = useState("")
    const [ReAddess,setReAddess] = useState("")
    const [ReCountry,setReCountry] = useState("")
    const [ReCity,setReCity] = useState("")
    const [ReState,setReState] = useState("")
    const [RePincode,setRePincode] = useState("")
    const [RePhone,setRePhone] = useState("")
    const [ReImg,setReImg] = useState("")
    const [ReBiography,setReBiography] = useState("")
    const [ReStatus,setReStatus] = useState("") 
    
    const sendData = async () =>{
        try{
            const user = {
                ReFname: ReFname,
                ReLname: ReLname,
                ReAge: ReAge,
                ReEmail: ReEmail,
                ReDob: ReDob,
                ReGender: ReGender,
                ReAddess: ReAddess,
                ReCountry: ReCountry,
                ReCity: ReCity,
                ReState: ReState,
                RePincode: RePincode,
                RePhone: RePhone,
                ReImg: ReImg,
                ReBiography: ReBiography,
                ReStatus: ReStatus,
            };
            const data = await fetch("http://localhost:8000/api/user/addreailer",{
                method:"post",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(user),
            });
        }catch{}
    };

    const ReFname1 = (e) =>{
        const value = e.target.value;
        setReFname(value)
    };
    const ReLname1 = (e) =>{
        const value = e.target.value;
        setReLname(value)
    };
    const ReAge1 = (e) =>{
        const value = e.target.value;
        setReAge(value)
    };
    const ReEmail1 = (e) =>{
        const value = e.target.value;
        setReEmail(value)
    };
    const ReDob1 = (e) =>{
        const value = e.target.value;
        setReDob(value)
    };
    const ReGender1 = (e) =>{
        const value = e.target.value;
        setReGender(value)
    };
    const ReAddess1 = (e) =>{
        const value = e.target.value;
        setReAddess(value)
    };
    const ReCountry1 = (e) =>{
        const value = e.target.value;
        setReCountry(value)
    };
    const ReCity1 = (e) =>{
        const value = e.target.value;
        setReCity(value)
    };
    const ReState1 = (e) =>{
        const value = e.target.value;
        setReState(value)
    };
    const RePincode1 = (e) =>{
        const value = e.target.value;
        setRePincode(value)
    };
    const RePhone1 = (e) =>{
        const value = e.target.value;
        setRePhone(value)                 
    };                
    const ReImg1 = (e) =>{
        const value = e.target.value;
        setReImg(value)    
    };   
    const ReBiography1 = (e) =>{
        const value = e.target.value;
        setReBiography(value) 
    };
    const ReStatus1 = (e) =>{
        const value = e.target.value;
        setReStatus(value)
    };


    //fetch 
    const [data,setData] = useState([]);
    const datafetch = async () =>{
        try{
            const response = await fetch("http://localhost:8000/api/user/allretailerdeailer");
            const firstdata = await response.json();
            setData(firstdata);
        }catch(error){
            console.error("Error Fetching Data",error)
        }
    }
    
    useEffect(()=>{
        datafetch();
    },[]);

  return (
    <>
    <Header />
    <Sidebar />
    <div className="page-wrapper">
            <div className="content">

                <div className="row">
                    <div className="col-sm-4 col-3">
                        <h4 className="page-title">Retailers</h4>
                    </div>
                    <div className="col-sm-8 col-9 text-right m-b-20">
                    <a type="button" className="btn btn-primary btn-rounded float-right" data-toggle="modal" data-target="#AddRetailerModalLong">
                    <i className="fa fa-plus"></i> Add Retailers</a>
                        {/* <a href="add-doctor.html" classNameName="btn btn-primary btn-rounded float-right"><i class="fa fa-plus"></i> Add Retailers</a> */}
                    </div>
                </div>
				<div className="row doctor-grid">
                    {data.map((topic,index)=>(
                    <div key={index} className="col-md-4 col-sm-4  col-lg-3">
                        <div className="profile-widget">
                            <div className="doctor-img">
                                <a class="avatar" href="profile.html"><img alt="" src="../assets/img/user.png" /></a>
                            </div>
                            <div className="dropdown profile-action">
                                <a href="#" classNameName="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a classNameName="dropdown-item" href="edit-doctor.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                    <a classNameName="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                </div>
                            </div>
                            <h4 class="doctor-name text-ellipsis"><a href="profile.html">{topic.ReFname} {topic.ReLname}</a></h4>
                            
                            <div className="user-country">
                                <i className="fa fa-map-marker"></i>{topic.ReAddess} {topic.ReCountry}
                            </div>
                        </div>
                    </div>
                    ))}
                    {/* <div className="col-md-4 col-sm-4  col-lg-3">
                        <div className="profile-widget">
                            <div className="doctor-img">
                                <a class="avatar" href="profile.html"><img alt="" src="../assets/img/user.png" /></a>
                            </div>
                            <div className="dropdown profile-action">
                                <a href="#" classNameName="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a classNameName="dropdown-item" href="edit-doctor.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                    <a classNameName="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                </div>
                            </div>
                            <h4 class="doctor-name text-ellipsis"><a href="profile.html">Marie Wells</a></h4>
                            <div className="user-country">
                                <i className="fa fa-map-marker"></i> Piplani, India
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4  col-lg-3">
                        <div className="profile-widget">
                            <div className="doctor-img">
                                <a class="avatar" href="profile.html"><img alt="" src="../assets/img/user.png" /></a>
                            </div>
                            <div className="dropdown profile-action">
                                <a href="#" classNameName="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a classNameName="dropdown-item" href="edit-doctor.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                    <a classNameName="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                </div>
                            </div>
                            <h4 class="doctor-name text-ellipsis"><a href="profile.html">Henry Daniels</a></h4>
                            <div className="user-country">
                                <i className="fa fa-map-marker"></i> Piplani, India
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4  col-lg-3">
                        <div className="profile-widget">
                            <div className="doctor-img">
                                <a class="avatar" href="profile.html"><img alt="" src="../assets/img/user.png" /></a>
                            </div>
                            <div className="dropdown profile-action">
                                <a href="#" classNameName="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a classNameName="dropdown-item" href="edit-doctor.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                    <a classNameName="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                </div>
                            </div>
                            <h4 class="doctor-name text-ellipsis"><a href="profile.html">Mark Hunter</a></h4>
                            <div className="user-country">
                                <i className="fa fa-map-marker"></i> Piplani, India
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4  col-lg-3">
                        <div className="profile-widget">
                            <div className="doctor-img">
                                <a class="avatar" href="#"><img alt="" src="../assets/img/user.png" /></a>
                            </div>
                            <div className="dropdown profile-action">
                                <a href="#" classNameName="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a classNameName="dropdown-item" href="edit-doctor.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                    <a classNameName="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                </div>
                            </div>
                            <h4 class="doctor-name text-ellipsis"><a href="profile.html">Michael Sullivan</a></h4>
                            <div className="user-country">
                                <i className="fa fa-map-marker"></i> Piplani, India
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4  col-lg-3">
                        <div className="profile-widget">
                            <div className="doctor-img">
                                <a class="avatar" href="profile.html"><img alt="" src="../assets/img/user.png" /></a>
                            </div>
                            <div className="dropdown profile-action">
                                <a href="#" classNameName="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a classNameName="dropdown-item" href="edit-doctor.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                    <a classNameName="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                </div>
                            </div>
                            <h4 class="doctor-name text-ellipsis"><a href="profile.html">Linda Barrett</a></h4>
                            <div className="user-country">
                                <i className="fa fa-map-marker"></i> Piplani, India
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4  col-lg-3">
                        <div className="profile-widget">
                            <div className="doctor-img">
                                <a class="avatar" href="profile.html"><img alt="" src="../assets/img/user.png" /></a>
                            </div>
                            <div className="dropdown profile-action">
                                <a href="#" classNameName="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a classNameName="dropdown-item" href="edit-doctor.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                    <a classNameName="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                </div>
                            </div>
                            <h4 class="doctor-name text-ellipsis"><a href="profile.html">Ronald Jacobs</a></h4>
                            <div className="user-country">
                                <i className="fa fa-map-marker"></i> Piplani, India
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4  col-lg-3">
                        <div className="profile-widget">
                            <div className="doctor-img">
                                <a class="avatar" href="profile.html"><img alt="" src="../assets/img/user.png" /></a>
                            </div>
                            <div className="dropdown profile-action">
                                <a href="#" classNameName="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a classNameName="dropdown-item" href="edit-doctor.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                    <a classNameName="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                </div>
                            </div>
                            <h4 class="doctor-name text-ellipsis"><a href="profile.html">Albert Sandoval</a></h4>
                            <div className="user-country">
                                <i className="fa fa-map-marker"></i> Piplani, India
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4  col-lg-3">
                        <div className="profile-widget">
                            <div className="doctor-img">
                                <a class="avatar" href="profile.html"><img alt="" src="../assets/img/user.png" /></a>
                            </div>
                            <div className="dropdown profile-action">
                                <a href="#" classNameName="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a classNameName="dropdown-item" href="edit-doctor.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                    <a classNameName="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                </div>
                            </div>
                            <h4 class="doctor-name text-ellipsis"><a href="profile.html">Diana Bailey</a></h4>
                            <div className="user-country">
                                <i className="fa fa-map-marker"></i> Piplani, India
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4  col-lg-3">
                        <div className="profile-widget">
                            <div className="doctor-img">
                                <a class="avatar" href="profile.html"><img alt="" src="../assets/img/user.png" /></a>
                            </div>
                            <div className="dropdown profile-action">
                                <a href="#" classNameName="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a classNameName="dropdown-item" href="edit-doctor.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                    <a classNameName="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                </div>
                            </div>
                            <h4 class="doctor-name text-ellipsis"><a href="profile.html">Shirley Willis</a></h4>
                            <div className="user-country">
                                <i className="fa fa-map-marker"></i> Piplani, India
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="col-md-4 col-sm-4  col-lg-3">
                        <div className="profile-widget">
                            <div className="doctor-img">
                                <a class="avatar" href="profile.html"><img alt="" src="../assets/img/user.png" /></a>
                            </div>
                            <div className="dropdown profile-action">
                                <a href="#" classNameName="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a classNameName="dropdown-item" href="edit-doctor.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                    <a classNameName="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                </div>
                            </div>
                            <h4 class="doctor-name text-ellipsis"><a href="profile.html">Pamela Curtis</a></h4>
                            <div className="user-country">
                                <i className="fa fa-map-marker"></i> Piplani, India
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4  col-lg-3">
                        <div className="profile-widget">
                            <div className="doctor-img">
                                <a class="avatar" href="profile.html"><img alt="" src="../assets/img/user.png" /></a>
                            </div>
                            <div className="dropdown profile-action">
                                <a href="#" classNameName="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a classNameName="dropdown-item" href="edit-doctor.html"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                                    <a classNameName="dropdown-item" href="#" data-toggle="modal" data-target="#delete_doctor"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                                </div>
                            </div>
                            <h4 class="doctor-name text-ellipsis"><a href="profile.html">Justin Parker</a></h4>
                            <div className="user-country">
                                <i className="fa fa-map-marker"></i> Piplani, India
                            </div>
                        </div>
                    </div> */}
                </div>
				<div className="row">
                    <div className="col-sm-12">
                        <div className="see-all">
                            <a class="see-all-btn" href="javascript:void(0);">Load More</a>
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
        <form>
        <div class="modal fade" id="AddRetailerModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div className="modal-dialog modal-xl" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Add Retailer</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <div className="content">
                {/* <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h4 className="page-title">Add Retailer</h4>
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        {/* <form> */}
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>First Name <span className="text-danger">*</span></label>
                                        <input class="form-control" type="text" onChange={ReFname1} value={ReFname}/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input class="form-control" type="text" onChange={ReLname1} value={ReLname}/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Age <span className="text-danger">*</span></label>
                                        <input class="form-control" type="text" onChange={ReAge1} value={ReAge}/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Email <span className="text-danger">*</span></label>
                                        <input class="form-control" type="email" onChange={ReEmail1} value={ReEmail}/>
                                    </div>
                                </div>
                                {/* <!-- <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input class="form-control" type="password">
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Confirm Password</label>
                                        <input class="form-control" type="password"/>
                                    </div>
                                </div> --> */}
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Date of Birth</label>
                                        <div className="cal-icon">
                                            <input type="text" className="form-control datetimepicker" onChange={ReDob1} value={ReDob}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group gender-select">
                                        <label className="gen-label">Gender:</label>
                                        <div className="form-check-inline">
                                            <label className="form-check-label">
                                                <input type="radio" name="gender" className="form-check-input" onChange={ReGender1} value={ReGender}/>Male
                                            </label>
                                        </div>
                                        <div className="form-check-inline">
                                            <label className="form-check-label">
                                                <input type="radio" name="gender" className="form-check-input" onChange={ReGender1} value={ReGender}/>Female
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <label>Address</label>
                                                <input type="text" className="form-control " onChange={ReAddess1} value={ReAddess}/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3">
                                            <div className="form-group">
                                                <label>Country</label>
                                                <select className="form-control" onChange={ReCountry1} value={ReCountry}>
                                                    <option>India</option>
                                                    {/* <!-- <option>United Kingdom</option> --> */}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3">
                                            <div className="form-group">
                                                <label>City</label>
                                                <input type="text" className="form-control" onChange={ReCity1} value={ReCity}/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3">
                                            <div className="form-group">
                                                <label>State/UT</label>
                                                <select className="form-control" onChange={ReState1} value={ReState}>
                                                    <option>Madhya Pradesh</option>
                                                    <option>Utter Pradesh</option>
                                                    <option>Maharastra</option>
                                                    <option>Gujrat</option>
                                                    <option>Chhatisgarh</option>
                                                    <option>Goa</option>
                                                    <option>Delhi</option>
                                                    <option>Hariyana</option>
                                                    <option>Jammu & Kashmir</option>
                                                    <option>Himachal Pradesh</option>
                                                    <option>Andhra Pradesh</option>
                                                    <option>Manipur</option>
                                                    <option>Sikkim</option>
                                                    <option>Tamil Nadu</option>
                                                    <option>Meghalaya</option>
                                                    <option>Arunachal Pradesh</option>
                                                    <option>Assam</option>
                                                    <option>Jharkhand</option>
                                                    <option>Mizoram</option>
                                                    <option>Telangana</option>
                                                    <option>Tripura</option>
                                                    <option>Nagaland</option>
                                                    <option>Karnataka</option>
                                                    <option>Bihar</option>
                                                    <option>Punjab</option>
                                                    <option>Odisha</option>
                                                    <option>Uttarakhand</option>
                                                    <option>Rajasthan</option>
                                                    <option>West Bengal</option>
                                                    <option>Andaman and Nicobar Islands</option>
                                                    <option>Dadra and Nagar Haveli and Daman & Diu</option>
                                                    <option>Lakshadweep</option>
                                                    <option>Puducherry</option>
                                                    <option>Ladakh</option>
                                                    <option>Chandigarh</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3">
                                            <div className="form-group">
                                                <label>Postal Code</label>
                                                <input type="text" className="form-control" onChange={RePincode1} value={RePincode}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Phone </label>
                                        <input class="form-control" type="text" onChange={RePhone1} value={RePhone}/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Image</label>
                                        <div className="profile-upload">
                                            <div className="upload-img">
                                                <img alt="" src="../assets/img/user.jpg"/>
                                            </div>
                                            <div className="upload-input">
                                                <input type="file" className="form-control" onChange={ReImg1} value={ReImg}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Short Biography</label>
                                <textarea class="form-control" rows="3" cols="30" onChange={ReBiography1} value={ReBiography}></textarea>
                            </div>
                            <div className="form-group">
                                <label className="display-block">Status</label>
                                <div className="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="status" id="doctor_active"
                                         checked onChange={ReStatus1} value={ReStatus}/>
                                    <label class="htmlForm-check-label" for="doctor_active">
                                        Active
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="status" id="doctor_inactive"
                                        onChange={ReStatus1} value={ReStatus}/>
                                    <label class="htmlForm-check-label" for="doctor_inactive">
                                        Inactive
                                    </label>
                                </div>
                            </div>
                            {/* <div className="m-t-20 text-center">
                                <button className="btn btn-primary submit-btn">Create Retailer</button>
                            </div> */}
                        {/* </form> */}
                    </div>
                </div>
            </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button className="btn btn-primary submit-btn" onClick={sendData}>Create Retailer</button>

      </div>
    </div>
  </div>
</div>
</form>
    </>
  )
}
