import axios from 'axios'
import React, { useEffect } from 'react'

useEffect(() => {
  axios('http://localhost:3000/users')
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.log(error);
  })
})

const App = () => {
  return (
    <>
    
    </>
  )
}

export default App