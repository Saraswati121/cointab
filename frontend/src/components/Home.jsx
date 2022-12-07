import React from 'react'
import './style.css'
import { useNavigate} from "react-router-dom";

export const Home = () => {
    const nav = useNavigate()
    const userid= localStorage.getItem("userid")
    console.log(userid)
  return (
    <div>
        <div className="nav">
        <div>
          <img
            src="https://www.shutterstock.com/image-vector/welcome-lettering-sign-handwritten-modern-600w-1452185639.jpg"
            alt=""
            width="250px"
            height="53px"
            style={{marginTop:"2px"}}
          />
        </div>
        <div>
          <button className="btn" onClick={()=>nav('/') }>Logout</button>
        </div>
      </div>

      <div>pandasaraswati@gmail.com</div>
    </div>
  )
}

