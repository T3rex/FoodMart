import { useState,useEffect } from "react";

const useOnline = () =>{
    const [isOnline,setIsOnline] = useState(true);

    useEffect(()=>{
        window.addEventListener("online",handleOnline)
        window.addEventListener("offline",handleOffline)

        function handleOnline(){
            setIsOnline(true);
        }
        function handleOffline(){
            setIsOnline(false);
        }

        return ()=>{
            window.removeEventListener("online",handleOnline);
            window.removeEventListener("offline",handleOffline);
        }
    },[])

    return isOnline;
}

export default useOnline;