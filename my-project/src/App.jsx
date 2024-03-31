import { useEffect, useState } from "react"
import { ApiContext } from "./context/ApiContext"
import Homepage from "./pages/Homepage"
import axios from "axios"


function App() {
  const [state, setState] = useState('')
  const api = "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"

  const allData = async () => {
    const data = await axios.get(api)
      .then((res) => {
        // console.log("data", res.data.user);
        setState(res.data.user)
      })
  }

  useEffect(() => {
    allData()
  }, [])


  return (
    <>
      <ApiContext.Provider value={{ state, setState }}>
        <Homepage />
      </ApiContext.Provider>
    </>
  )
}

export default App
