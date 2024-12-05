"use client";
import style from '../styles/page.module.css'
import { Button } from "antd";



export default function Home() {
  return (
    <main className={style.body}>
      {/* <div> */}
       <h1>Welcome to the shu sudoku game!</h1>
       
        {/* </div> */}
          {/* <div> */}
            <h2>Please choose the level</h2>
            <div className={style.buttons_box}>
              <Button href={'/easy'} className={style.easy}>easy</Button>
              <Button  href={'/medium'} className={style.medium}>medium</Button>
              <Button href={'/hard'} className={style.hard}>hard</Button>
              <Button href={'/expert'} className={style.expert}>expert</Button>
            </div>
          {/* </div> */}
    </main>
  );
}
