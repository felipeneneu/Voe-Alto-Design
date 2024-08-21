import { ArrowClockwise, ChatCircle, Heart } from '@phosphor-icons/react'
import './TweetTwo.css'
import imagem2 from '../assets/Post-do-Site-2.png'
import avatarempresa from '../assets/Ativo 2.png'


export function TweetTwo() {
  return (
    <a href='#' className='tweet'>
      <img src={avatarempresa} alt="" />

      <div className='tweet-content'>
        <div className='tweet-content-header'>
          <strong>Felipe Neneu</strong>
          <span>@Designer/Developer</span>
        </div>
        <h2 >Posts e Motions para Engajar Eleitores!</h2>
        <br />

        <p>💡 Transforme sua campanha com design profissional! Posts e motions que engajam e fortalecem sua mensagem. Entre em contato e destaque-se!</p>


        <br />
        <img className='post' src={imagem2} alt="" />

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
    </a>

  )
}