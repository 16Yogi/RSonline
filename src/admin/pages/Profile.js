import React from 'react'
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
export default function Profile() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="page-wrapper">
            <div className="content">
                <div className="row">
                    <div className="col-sm-7 col-6">
                        <h4 className="page-title">My Profile</h4>
                    </div>

                    {/* <div className="col-sm-5 col-6 text-right m-b-30">
                        <a href="edit-profile.html" className="btn btn-primary btn-rounded"><i class="fa fa-plus"></i> Edit Profile</a>
                    </div> */}
                </div>
                <div className="card-box profile-header">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="profile-view">
                                <div className="profile-img-wrap">
                                    <div className="profile-img">
                                        <a href="#"><img class="avatar" src="../assets/img/user.png" alt=""/></a>
                                    </div>
                                </div>
                                <div className="profile-basic">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="profile-info-left">
                                                <h3 className="user-name m-t-0 mb-0">Supyar Meena</h3>
                                                <small className="text-muted">Owner</small>
                                                <div className="staff-id">Employee ID : RSO-0001</div>
                                                {/* <div className="staff-msg"><a href="chat.html" class="btn btn-primary">Send Message</a></div> */}
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-5">
                                            <ul className="personal-info">
                                                <li>
                                                    <span className="title">Phone:</span>
                                                    <span class="text"><a href="#">9340326142</a></span>
                                                </li>
                                                <li>
                                                    <span className="title">Email:</span>
                                                    <span class="text"><a href="#">abc@example.com</a></span>
                                                </li>
                                                <li>
                                                    <span className="title">DOB:</span>
                                                    <span className="text">20 june</span>
                                                </li>
                                                <li>
                                                    <span className="title">Address:</span>
                                                    <span className="text">74 Bunglows New Market, Bhopal (M.P.) 462003</span>
                                                </li>
                                                <li>
                                                    <span className="title">Gender:</span>
                                                    <span className="text">Male</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>                        
                        </div>
                    </div>
                </div>
				{/* <div className="profile-tabs">
					<ul className="nav nav-tabs nav-tabs-bottom">
						<li class="nav-item"><a class="nav-link active" href="#about-cont" data-toggle="tab">About</a></li>
						<li class="nav-item"><a class="nav-link" href="#bottom-tab2" data-toggle="tab">Profile</a></li>
						<li class="nav-item"><a class="nav-link" href="#bottom-tab3" data-toggle="tab">Messages</a></li>
					</ul>

					<div className="tab-content">
						<div class="tab-pane show active" id="about-cont">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card-box">
                            <h3 className="card-title">Education Informations</h3>
                            <div className="experience-box">
                                <ul className="experience-list">
                                    <li>
                                        <div className="experience-user">
                                            <div className="before-circle"></div>
                                        </div>
                                        <div className="experience-content">
                                            <div className="timeline-content">
                                                <a href="#/" className="name">International College  (UG)</a>
                                                <div>BTech</div>
                                                <span className="time">2017 - 2021</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="experience-user">
                                            <div className="before-circle"></div>
                                        </div>
                                        <div className="experience-content">
                                            <div className="timeline-content">
                                                <a href="#/" className="name">Pg collage </a>
                                                <div>MCA</div>
                                                <span className="time">2014 - 2014</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card-box mb-0">
                            <h3 className="card-title">Experience</h3>
                            <div className="experience-box">
                                <ul className="experience-list">
                                    <li>
                                        <div className="experience-user">
                                            <div className="before-circle"></div>
                                        </div>
                                        <div className="experience-content">
                                            <div className="timeline-content">
                                                <a href="#/" className="name">Team Leader</a>
                                                <span className="time">Jan 2021 - Present (1 years 6 months)</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="experience-user">
                                            <div className="before-circle"></div>
                                        </div>
                                        <div className="experience-content">
                                            <div className="timeline-content">
                                                <a href="#/" className="name">Developer</a>
                                                <span className="time">Jan 2020 - 2021</span>
                                            </div>
                                        </div>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
						</div>
						<div class="tab-pane" id="bottom-tab2">
							Tab content 2
						</div>
						<div class="tab-pane" id="bottom-tab3">
							Tab content 3
						</div>
					</div>
				</div> */}
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
