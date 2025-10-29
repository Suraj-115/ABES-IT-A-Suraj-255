import Card from './Components/Card'
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
    <Navbar/>
      <br />
      <Card name="Suraj" age={18}/>
      <br />
      <Card name="Shyam" age={20}/>
      <br />
      <Card name="Agarwal" age={21}/>
    </>
  )
}

export default App
