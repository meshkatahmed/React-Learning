import { useState,useEffect } from "react";

const useWindowWidth = (screenSize) => {
    const [onSmallScreen,setOnSmallScreen] = useState(false);

    const checkScreenSize = () => {
        setOnSmallScreen(window.innerWidth<screenSize);
    }
    useEffect(()=>{
        checkScreenSize();
        window.addEventListener('resize',checkScreenSize);
        return () => window.removeEventListener('resize',checkScreenSize);
    },[]); // Should I add checkScreenSize as dependency??

    return onSmallScreen;
}

export default useWindowWidth;

    