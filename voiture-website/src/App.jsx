import Background from "./Components/Background/Background";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
const App = () => {
  let heroData = [
    { text1: "Dive into" , text2: "what you love"},
    { text1: "Indulge" , text2: "your passions"},
    { text1: "Give in to" , text2: "your favorites"},
  ]
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() =>{
    setInterval(() =>{
      setHeroCount((Count)=>{ return Count===2 ? 0:Count+1 })
    }, 3000); 
  }, [])
  return (

    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero 
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
        />
    </div>
  )
}

export default App
