import './Tweet.css'
import { Slider } from "./Slider"
import avatarempresa from '../assets/Ativo 2.png'
import dono from '../assets/Felipe-Avatar.jpg'

export function About() {
  return (
    <div className='tweet'>
      <img src={avatarempresa} alt="" />

      <div className='tweet-content'>
        <div className='tweet-content-header'>
          <strong>Felipe Neneu</strong>
          <span>@Cto</span>
        </div>
        <div className='nosite'>
          <img className='dono' src={dono} alt="" />
          <h2>Quem sou eu?</h2>
          <p>🎨 Sou designer desde os 12 anos, quando transformei meu hobby em paixão ao criar sites de animes e aprender HTML e CSS. Com o tempo, desenvolvi minhas habilidades em softwares como Photoshop e Illustrator,
            especializando-me em Identidade Visual, criação de flyers, posts para Instagram 📱 e motion design para reels 🎥.</p>
        </div>
        <Slider />
      </div>
    </div>
  )
}
