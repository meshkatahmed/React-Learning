import { useState,useEffect, useCallback } from "react";

const useWindowWidth = (screenSize) => {
    const [onSmallScreen,setOnSmallScreen] = useState(false);

    const checkScreenSize = useCallback(() => {
        setOnSmallScreen(window.innerWidth<screenSize);
    },[screenSize]);
    useEffect(()=>{
        checkScreenSize();
        window.addEventListener('resize',checkScreenSize);
        return () => window.removeEventListener('resize',checkScreenSize);
    },[checkScreenSize]); // Should I add checkScreenSize as dependency??

    return onSmallScreen;
}

export default useWindowWidth;

    