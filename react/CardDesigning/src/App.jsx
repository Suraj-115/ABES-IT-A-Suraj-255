
import { useEffect, useState } from "react";
import Card from "./Component/Card";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

function App() {
  // const [count, setCount] = useState(0)
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <>
      <div>
        <Header />
        <h1 style={{ textAlign: "center", marginTop: "20px" }}>
          Card Designing
        </h1>
        <div className="container">
          {data.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
