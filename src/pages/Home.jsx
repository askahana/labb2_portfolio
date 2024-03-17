import React, {useState} from 'react'
import mePic from '../assets/ProfileImage.jpg'

const Home = () => {
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState("");
  const modal = document.getElementById("modal");
  const handlePass = (e) =>{
    const value = e.target.value;
    setPass(value);
    if(value === "1234"){
      modal.style.display = "block";
      setMessage(m => "You found a secret🤫")
    }
  }
  const handleClose = () =>{
    modal.style.display= "none";
    setPass("");
  }
  return (
    <div className ="main">
        <div className ="short-text">
            <h1>Hej! Jag heter Asuka Hanada!</h1>
            <h4>som läser systemutveckling .NET på Campus i Varberg, <br />
                 och söker en LIA-plats under vintern 2024-2025!</h4>
                  <div className="input-container">
                    <input type="password" className="inputBox" onChange = {handlePass}  value={pass} autoFocus/>
                  </div>
            {/**    {isModalOpen&&(*/}   
                    <div id="modal" >
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1><i class="fa-solid fa-user-secret"></i> Shhhh <i class="fa-solid fa-user-secret"></i></h1>
                          <span class="modalClose" onClick= {handleClose}>&times;</span>
                        </div>
                        <div class="modal-body">
                         
                          <p>{message}</p>
                        </div>
                      </div>
                    </div>
                 {/*  )}*/}
              </div>
        <img src= {mePic} alt="Asuka Hanada picture"/>
    </div>
  )
}

export default Home