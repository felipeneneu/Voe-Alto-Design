import './Tweet.css'
import './Galeria.css'
import avatarempresa from '../assets/Ativo 2.png'
import Image from './Image'

export function Galeria() {
  return (
    <div className='tweet'>
      <img src={avatarempresa} alt="" />

      <div className='tweet-content'>
        <div className='tweet-content-header'>
          <strong>Felipe Neneu</strong>
          <span>@Dev</span>
        </div>
        <br />
        <h2>#Explore</h2>
        <p>🌟 Confira meus trabalhos! 🌟<br />
          🎨💡 Criações únicas e criativas para dar vida às suas ideias! <br />
          😊✨ Estou ansioso para saber o que você achou!</p>
        <br />
        <div className='galeriaimg'>
          <img src={Image.img5} alt="" />
          <img src={Image.img3} alt="" />
          <img src={Image.img1} alt="" />
          <img src={Image.img2} alt="" />
          <img src={Image.img4} alt="" />



        </div>
        <br />
        <h2>Confira este vídeo!</h2>
        <p>🎥 <strong>Confira esses motions incríveis!</strong><br />
          ✨ Animações que dão vida às ideias e elevam qualquer projeto.</p>
        <br />
        <div className='motions'>
          <video controls autoPlay loop muted>
            <source src={Image.video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video controls autoPlay loop muted>
            <source src={Image.video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}
