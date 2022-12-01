import React from 'react'

const Home = () => {

    const handleClick = ()=>{
      console.log("click!");

      fetch("http://localhost:8000/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username:"asdqwdqwdasda", password:"goodPassword"})
      })
      .then((data) => data.json())
      .then(data =>{
        console.table(data)
      })
      
    }
  return (
    <div>Home
        <div>
            <button onClick={()=>{handleClick()}}>Click Me!</button>

        </div>


    </div> 
  )
}

export default Home;