import React from 'react'

const DisplayCustomer = (props) => {
  return (
    <>
<div>
  <table>
    <tbody>
      <tr>
        <th>Customer ID</th>
        <th>Customer Name</th>
        <th>Customer Address</th>
        <th>Customer Mobile No</th>
      </tr>
      {
         props.customers.map(e=>(
      <tr>
        <td>{e.id}</td>
        <td>{e.name}</td>
        <td>{e.address}</td>
        <td>{e.mobileNo}</td>
      </tr>
         ))
      }
    </tbody>
  </table>
</div>

    </>
  )
}

export default DisplayCustomer