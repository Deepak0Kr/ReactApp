import { useState, useEffect} from 'react'
import {useDispatch} from "react-redux"
import authService from './appwrite/auth'
import { login,logout } from './store/authSlice'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


function App() {


  const [loading, setloading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{
      
      if(userData){
        userData.dispatch(
          login({userData}))
      }else{
        userData.dispatch(logout())
      }
    })
    .finally(()=>setloading(false))
  }, [])
  

  return  !loading? 
    (
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>

          <div className='w-screen block'>
             <Header />
             <main>
              {/* <Outlet /> */}
             </main>
             <Footer />
          </div>
      </div>
    )
    :null
}

export default App
