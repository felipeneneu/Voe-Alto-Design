import { Header } from "../components/Header";
import './Timeline.css'
import { About } from "../components/About";

export function SobreMim() {
  return (
    <main className='contato'>

      <Header title='Sobre Mim' />

      <div className="separation" />

      <About />

    </main>
  )
}

