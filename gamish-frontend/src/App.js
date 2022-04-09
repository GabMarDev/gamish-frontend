import { useState } from "react";
import Home from "./home/Home.js"
import Login from "./login/Login.js"

function App() {

  const [page, setPage] = useState('Home')
  
  return (
    <div>
      {page === "Home" && <Home setPage = {setPage}/>}
      {page === "Login" && <Login setPage = {setPage} />} 
    </div>
  );
}

export default App;