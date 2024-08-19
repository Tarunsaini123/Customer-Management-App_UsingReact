import React, { useState } from 'react'
import { addCustomer, cusArr, searchCustomer, deleteCustomer, modifyCustomer } from '../BLL/CustomerBLL';
import DisplayCustomer from './DisplayCustomer';

var cur_index = 0;
const Customer = () => {
    const [id,setId]=useState('');
    const [name,setName]=useState('');
    const [address,setAddress]=useState('');
    const [mobileNo,setMobileNo]=useState('');
    const [customers,setCustomers]=useState([]);
    

    function id_change(e) {
        setId(e.target.value);
    }
    function name_change(e) {
        setName(e.target.value);
    }
    function address_change(e) {
        setAddress(e.target.value);
    }
    function mobileNo_change(e) {
        setMobileNo(e.target.value);
    }
  
    function add_Click(e){
      
      addCustomer(id,name,address,mobileNo);
      setCustomers([...cusArr]);
      alert('Customer Added Successfully');
    }

    function search_Click(e){
      var cus=searchCustomer(id);
      if(cus){
        setName(cus.name);
        setAddress(cus.address);
        setMobileNo(cus.mobileNo);
    
      }else{
        alert('Id not found');
      }
     
    }
    function delete_Customer(e){
      var msg=deleteCustomer(id);
      alert(msg);
      setCustomers([...cusArr]);
    }
    function showCustomer(index){
      var cus=cusArr[index];
      setId(cus.id);
      setName(cus.name);
      setAddress(cus.address);
      setMobileNo(cus.mobileNo);
    }
    function first_Click(e){
      cur_index=0;
      showCustomer(cur_index);
    }
    function next_Click(e){
      if(cur_index<cusArr.length-1){
        cur_index++;
      }
     
      showCustomer(cur_index);
    }
    function previous_Click(e){
      if(cur_index>0){
        cur_index--;
      }   
      showCustomer(cur_index);
    }
    function last_Click(e){
      cur_index=cusArr.length-1;   
      showCustomer(cur_index);
    }



  return (
    <>
    <div className="main">
  <h3>Customer Management System</h3>
<div className="input-element">
    <label htmlFor="txtID">Customer ID:</label>
    <input onChange={id_change} type="text" id="txtID" value={id}/>
    <label htmlFor="txtName">Customer Name:</label>
    <input onChange={name_change}  type="text"value={name} id="txtName" />
    <label htmlFor="txtAddress">Customer Address:</label>
    <textarea onChange={address_change}  name="" id="txtAddress" cols={30} rows={10}  value={address} />
    <label htmlFor="txtMobileNo">Customer Mobile No:</label>
    <input onChange={mobileNo_change}  type="text" id="txtMobileNo" value={mobileNo}/>
  </div>
  <div className="input-btn">
     <button type="button" class="btn btn-success" onClick={add_Click}>Add</button>
     <button type="button" class="btn btn-danger" onClick={search_Click}>Search</button>
     <button type="button" class="btn btn-warning"onClick={modifyCustomer} >Modify</button>
     <button type="button" class="btn btn-secondary" onClick={delete_Customer}>Delete</button>
  </div>
  <div className="input-btn">
     <button type="button" class="btn btn-warning" onClick={first_Click}>First</button>
     <button type="button" class="btn btn-info" onClick={previous_Click}>Previous</button>
     <button type="button" class="btn btn-light" onClick={next_Click}>Next</button>
     <button type="button" class="btn btn-dark" onClick={last_Click}>Last</button>
  </div>

  {/* <DisplayCustomer customers ={customers} /> */}
</div>

  <DisplayCustomer customers ={customers} />


    </>
  )
}

export default Customer;