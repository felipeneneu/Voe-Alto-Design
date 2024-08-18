import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './global.css';
import { Tweet } from './components/Tweet';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='layout'>

      <Sidebar />

      <div className="content">

        <main className='timeline'>

          <Header title='Home' />

          <form className='new-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://openseauserdata.com/files/4c7b1857e28506d0097052584355f4f3.png" alt="" />
              <textarea id="tweet" placeholder='Whats happening?'></textarea>
            </label>

            <button type='submit'>Tweet</button>
          </form>

          <div className="separation" />

          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </main>


      </div>
    </div>
  </StrictMode>,
)
