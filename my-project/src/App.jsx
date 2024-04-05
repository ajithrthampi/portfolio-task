import { useEffect, useState } from "react"
import { ApiContext } from "./context/ApiContext"
import Homepage from "./pages/Homepage"
import axios from "axios"
import Loader from "./components/loader/Loader"


function App() {
  const [state, setState] = useState('')
  const [loading, setLoading] = useState(false)
  const api = "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"

  const allData = async () => {
    try {
      const data = await axios.get(api)
        .then((res) => {
          // console.log("data", res.data.user);
          setState(res.data.user)
          // setLoading(false)
        })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    allData()
  }, [])

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])

  return (
    <>{
      loading ? <>
      <div className="h-screen flex justify-center items-center">
        <Loader />
      </div>
      </>
        :
        <>
          <ApiContext.Provider value={{ state, setState }}>
            <Homepage />
          </ApiContext.Provider>
        </>
    }

    </>
  )
}

export default App
