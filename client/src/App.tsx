import axios from "axios";

function App() {

  const headers = {}

  const getDataF = async ()=>{
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    await axios.post('https://pern-vercell-test.vercel.app/getdata',{

    })
    .then(res=>console.log(res))

  }
  return (
    <div className="App">



<button onClick={getDataF}> get data</button>
    </div>
  );
}

export default App;
