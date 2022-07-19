import axios from 'axios';
const BASE_URL = "https://vpic.nhtsa.dot.gov/api/vehicles";


function App() {
  const fetch = (e)=>{
    return axios.get(BASE_URL+'/getmanufacturerdetails/honda?format=json').then((result)=>{
      console.log("RESULT: ", result.data.Results)
    }).catch((error) => {
      console.log("ERROR: ", error);
    })
  }
  return (
    <div className="App">
        <button onClick={fetch}>Click Me</button>
    </div>
  );
}

export default App;
