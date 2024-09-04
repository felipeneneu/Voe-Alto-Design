import { Header } from "../components/Header";
import { ContatoT } from "../components/ContatoT";
import './Timeline.css'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function UsarTitulo(titulo: string): void {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/') {
      document.title = titulo;
    }
  }, [location, titulo]);
}

export function Contatos() {
  UsarTitulo('Explore');
  return (
    <main className='contato'>

      <Header title='Contato' />

      <div className="separation" />

      <ContatoT />

    </main>
  )
}