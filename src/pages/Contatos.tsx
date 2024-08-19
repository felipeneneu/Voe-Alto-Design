import { Header } from "../components/Header";
import { ContatoT } from "../components/ContatoT";
import './Timeline.css'

export function Contatos() {
  return (
    <main className='contato'>

      <Header title='Contato' />

      <div className="separation" />

      <ContatoT />

    </main>
  )
}