import React, {useState, useEffect} from 'react';
import Loading from './Loading';
import Git from './Git';

export default function GitHub(){
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); 
    return () => clearTimeout(timer);
  }, []);

   return(
    <div>
       {isLoading ? <Loading /> : <Git/>}
    </div>

   );
    
};