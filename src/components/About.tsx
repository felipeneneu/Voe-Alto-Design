import { ArrowClockwise, ChatCircle, Heart } from "@phosphor-icons/react"
import './Tweet.css'
import { Slider } from "./Slider"

export function About() {
  return (
    <div className='tweet'>
      <img src="https://openseauserdata.com/files/4c7b1857e28506d0097052584355f4f3.png" alt="" />

      <div className='tweet-content'>
        <div className='tweet-content-header'>
          <strong>Felipe Neneu</strong>
          <span>@Cto</span>
        </div>

        <Slider />

        <div className='tweet-content-footer'>
          <button type='button'>
            <ChatCircle />
            20
          </button>
          <button type='button'>
            <ArrowClockwise />
            20
          </button>
          <button type='button'>
            <Heart />
            20
          </button>
        </div>
      </div>
    </div>
  )
}
