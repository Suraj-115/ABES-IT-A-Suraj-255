import { useEffect,useState } from 'react'
// import './App.css'
import axios from 'axios';  
function App() {
  const [show,setShow] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8080/about')
    .then((res)=>{
      setShow(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  });
  return (
    <div style={{textAlign:'center', alignItems:'center'}}>
      <h1 style={{color:'blue'}}>DATA SHOW</h1>
      <div style={{display:'flex', justifyContent:'space-evenly'}}>
        {
        show.map((s,id)=>(
          <div key={id} style={{border:'2px solid black', padding:'20px'}}>
            <h1>{s.name}</h1>
            <h2>{s.class}</h2>
            <img src={s.image} alt="image" width={60} height={50}/>
          </div>  
        ))
      }
      </div>
    </div>
  )
}

export default App
