import { Header } from "../components/Header";
import { Tweet } from "../components/Tweet";
import { TweetTwo } from "../components/TweetTwo";
import './Timeline.css'

export function Timeline() {
  return (
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
      <TweetTwo />

    </main>
  )
}