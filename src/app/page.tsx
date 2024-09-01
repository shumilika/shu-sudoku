"use client";

import { Button } from "antd";



export default function Home() {
  return (
    <main>
      <div>
       <p>Welcome to the shu sudoku game!</p>
        </div>
          <div>
            <p>Please choose the level</p>
            <div>
              <Button href={'/easy'}>easy</Button>
              <Button  href={'/medium'}>medium</Button>
              <Button href={'/hard'}>hard</Button>
            </div>
          </div>
    </main>
  );
}
