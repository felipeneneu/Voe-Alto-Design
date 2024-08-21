import { ArrowClockwise, ChatCircle, Heart } from '@phosphor-icons/react'
import './Tweet.css'
import imagem3 from '../assets/Post-do-Site-3.png'
import avatarempresa from '../assets/Ativo 2.png'



export function ContatoT() {
  return (
    <div className='tweet'>
      <img src={avatarempresa} alt="" />

      <div className='tweet-content'>
        <div className='tweet-content-header'>
          <strong>Felipe Neneu</strong>
          <span>@Cto</span>
        </div>

        <h2>Tem alguma pergunta ou precisa de ajuda com o seu projeto? 🤔</h2>
        <br />
        <h3>
          Estamos aqui para ajudar! 🙌 Entre em contato conosco enviando uma mensagem direta 📩. Vamos conversar e encontrar a melhor solução para você! 💬😊
        </h3>
        <br />
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img className='post' src={imagem3} alt="" /></a>

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