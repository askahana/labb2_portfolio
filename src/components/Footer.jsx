import React, {useEffect, useState} from 'react'
import heart2 from '../assets/heart2.png';
import egg from '../assets/kanin.png'



const Footer = () => {
  const [newIcon, setNewIcon] = useState(heart2);

  const handleClick = (e) => {
    setNewIcon(newIcon === heart2? egg: heart2);
    if(newIcon === heart2){
      setNewIcon(n => egg);
      document.body.classList.add("easter-mode");
      document.body.classList.remove("nomal-mode");
    }else{
      setNewIcon(n => heart2);
      document.body.classList.remove("easter-mode");
      document.body.classList.add("nomal-mode");
    }
  }
  
  
  return (
    <footer>
        <p>&copy; Asuka Hanada <img onClick= {handleClick} src= {newIcon} alt="secret" id = "icon"/>{new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer