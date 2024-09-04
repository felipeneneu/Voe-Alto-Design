import { Header } from "../components/Header";
import './Timeline.css'
import { Galeria } from "../components/Galeria";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function UsarTitulo(titulo: string): void {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/explore') {
      document.title = titulo;
    }
  }, [location, titulo]);
}

export function Explore() {
  UsarTitulo('Explore');
  return (
    <main className='explore'>

      <Header title='#Explore' />

      <div className="separation" />

      <Galeria />

    </main>
  )
}

