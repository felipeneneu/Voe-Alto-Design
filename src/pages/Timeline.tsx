import { Header } from "../components/Header";
import { Tweet } from "../components/Tweet";
// import avatarempresa from '../assets/Ativo 2.png'
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
export function Timeline() {
  UsarTitulo('Voe Alto Design');
  return (
    <main className='timeline'>

      <Header title='Home' />



      {/* <form className='new-tweet-form'>
        <label htmlFor="tweet">
          <img src={avatarempresa} alt="" />
          <textarea id="tweet" placeholder='Whats happening?'></textarea>
        </label>

        <button type='submit'>Tweet</button>
      </form> */}

      <div className="separation" />

      <Tweet />

    </main>
  )
}