import { Header } from "../components/Header";
import './Timeline.css'
import { Galeria } from "../components/Galeria";

export function Explore() {
  return (
    <main className='explore'>

      <Header title='#Explore' />

      <div className="separation" />

      <Galeria />

    </main>
  )
}

