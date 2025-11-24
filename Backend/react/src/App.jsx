import { useEffect,useState } from 'react'
import './App.css'

function App() {
  const [st,setSt] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:8080/about')
    .then(res=>res.json())
    .then(data=>{
      setSt(data);
    })
  },[]);
  return (
    <div className='flex flex row mt-10 mb-10'>
      {
        st.map((s,id)=>(
          <div key={id} className='border-2 border-gray-600'>
            <h1>{s.name}</h1>
            <h2>{s.class}</h2>
          </div>  
        ))
      }
    </div>
  )
}

export default App
