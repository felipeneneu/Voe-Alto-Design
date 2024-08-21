import { Header } from "../components/Header";
import { Tweet } from "../components/Tweet";
import { TweetTwo } from "../components/TweetTwo";
import avatarempresa from '../assets/Ativo 2.png'
import './Timeline.css'

export function Timeline() {
  return (
    <main className='timeline'>

      <Header title='Home' />



      <form className='new-tweet-form'>
        <label htmlFor="tweet">
          <img src={avatarempresa} alt="" />
          <textarea id="tweet" placeholder='Whats happening?'></textarea>
        </label>

        <button type='submit'>Tweet</button>
      </form>

      <div className="separation" />

      <Tweet />

    </main>
  )
}