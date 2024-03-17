import React, {useState} from 'react'


const NotFound = () => {
    const [pass, SetPass] = useState("");
    
    const handlePass = (e) => {
        const newValue = e.target.value;
        SetPass(newValue);
        if(newValue ==="1234"){
            console.log("JUA");
        }
    };

  return (
   
    <div className="input-container">
        <input type="password" className="inputBox" onChange = {handlePass} value={pass} autoFocus/>
    </div>
  )
}

export default NotFound