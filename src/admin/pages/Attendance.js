import React from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
export default function Attendance() {
  return (
    <>
    <Header />
    <Sidebar />
    <div className="page-wrapper">
            <div className="content">
                <div className="row">
                    <div className="col-sm-12">
                        <h4 className="page-title">Attendance Sheet</h4>
                    </div>
                </div>
                <div className="row filter-row">
                    <div className="col-sm-6 col-md-3">
                        <div className="form-group form-focus">
                            <label className="focus-label">Employee Name</label>
                            <input type="text" className="form-control floating"/>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="form-group form-focus select-focus">
                            <label className="focus-label">Select Month</label>
                            <select className="select floating form-control">
                                <option>-</option>
                                <option>Jan</option>
                                <option>Feb</option>
                                <option>Mar</option>
                                <option>Apr</option>
                                <option>May</option>
                                <option>Jun</option>
                                <option>Jul</option>
                                <option>Aug</option>
                                <option>Sep</option>
                                <option>Oct</option>
                                <option>Nov</option>
                                <option>Dec</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="form-group form-focus select-focus">
                            <label className="focus-label">Select Year</label>
                            <select className="select floating form-control">
                                <option>-</option>
                                <option>2022</option>
                                <option>2023</option>
                                
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <a href="#" className="btn btn-success btn-block"> Search </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
						<div className="table-responsive">
                            <table className="table table-striped custom-table mb-0">
                                <thead>
                                    <tr>
                                        <th>Employee</th>
                                        <th>1</th>
                                        <th>2</th>
                                        <th>3</th>
                                        <th>4</th>
                                        <th>5</th>
                                        <th>6</th>
                                        <th>7</th>
                                        <th>8</th>
                                        <th>9</th>
                                        <th>10</th>
                                        <th>11</th>
                                        <th>12</th>
                                        <th>13</th>
                                        <th>14</th>
                                        <th>15</th>
                                        <th>16</th>
                                        <th>17</th>
                                        <th>18</th>
                                        <th>19</th>
                                        <th>20</th>
                                        <th>22</th>
                                        <th>23</th>
                                        <th>24</th>
                                        <th>25</th>
                                        <th>26</th>
                                        <th>27</th>
                                        <th>28</th>
                                        <th>29</th>
                                        <th>30</th>
                                        <th>31</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Sandeep</td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td>
                                            <div className="half-day"><span class="first-off"><i class="fa fa-check text-success"></i></span> <span class="first-off"><i class="fa fa-close text-danger"></i></span></div>
                                        </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td>
                                            <div className="half-day"><span class="first-off"><i class="fa fa-close text-danger"></i></span> <span class="first-off"><i class="fa fa-check text-success"></i></span></div>
                                        </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                    </tr>
                                    <tr>
                                        <td>Sachin</td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                    </tr>
                                    <tr>
                                        <td>Shrsti</td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                    </tr>
                                    <tr>
                                        <td>Sanjay</td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                    </tr>
                                    <tr>
                                        <td>Nawaz</td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                    </tr>
                                    <tr>
                                        <td>Surendra</td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                    </tr>
                                    <tr>
                                        <td>Aakansha</td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                    </tr>
                                    <tr>
                                        <td>Khushboo</td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                    </tr>
                                    <tr>
                                        <td>Priya</td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                    </tr>
                                    <tr>
                                        <td>Vivek</td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                    </tr>
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
  );
}