"use client";  
import React, { useEffect, useState } from "react"
import { Provider } from "react-redux"
import store from "./store"
import { ThemeProvider } from "next-themes"

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps>=({children})=>{
 
  const [mounted, setMounted] = useState(false)

  useEffect(()=>{
    setMounted(true)
  },[])
    
  if(!mounted){
    return <Provider store={store}>{children}</Provider>
  }
  return (
      <ThemeProvider attribute="class" defaultTheme="light">
        <Provider store={store}>{children}</Provider>
      </ThemeProvider>
    );
  
};

export default Providers;
