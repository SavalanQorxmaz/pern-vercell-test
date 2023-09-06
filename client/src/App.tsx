import axios from "axios";

function App() {

  const getDataF = async ()=>{

    await axios('http://localhost/9000/getdata')
    .then(res=>console.log(res))

  }
  return (
    <div className="App">



<button onClick={getDataF}> get data</button>
    </div>
  );
}

export default App;
