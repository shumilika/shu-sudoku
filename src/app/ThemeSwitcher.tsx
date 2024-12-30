"use client";
import { ConfigProvider, Switch } from 'antd';
import React, { useEffect, useState } from 'react';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';
import { useTheme } from 'next-themes';


const ThemeSwitcher = () => {
  const [mounted,setMounted] =useState(false)
  const {theme, setTheme} = useTheme()

  useEffect(()=>{
    setMounted(true)
  },[])

  if(!mounted){
    return null
  }

  const handleSwitchTheme=()=>{
    if(theme==='light'){
      setTheme('dark')
    }else{
      setTheme('light')
    }
  }
  
  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            Switch: {
              colorPrimary: "#B65A76", 
              colorPrimaryHover: "#9c4b65", 
              handleBg:'#FFE6E6',
              colorTextQuaternary:'#4F4F4F',
              colorTextTertiary:"#2E2E2E"
            },
          },
        }}
      >
        <Switch
          style={{
            position:'fixed',
            right:'20px',
            top:'20px',
            zIndex:'1000',
          }}
          checkedChildren={<SunOutlined style={{ color: "#FFE6E6" }} />} 
          unCheckedChildren={<MoonOutlined style={{ color: "#FFE6E6" }} />} 
        
          checked={theme === "light"}
          onChange={handleSwitchTheme}
        />
      </ConfigProvider>
    </div>
  );
};

export default ThemeSwitcher;