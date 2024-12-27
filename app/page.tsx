"use client"

import { useState } from "react";

export default function Home() {
  const [val, setVal] = useState('0');
  return (
    <main className="h-[500px] w-full flex items-center">
      <input type="text" className="w-[20%] text-black" onChange={(e) => { setVal(e.target.value) }} value={val}/>
    </main>
  );
}
