import React from 'react'

function Users(props) {
    console.log(props)
    const {data }= props
  return (
    <>
      <h1>User componet</h1>
      <h2>{data.name}</h2>
      <h2>{data.age}</h2>
    </>
  )
}

export default Users
