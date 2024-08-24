import './Tweet.css'
import './Galeria.css'
import avatarempresa from '../assets/Ativo 2.png'

const imggallery = {
  img1: '../assets/1.webp',
  img2: '../assets/2.webp',
  img3: '../assets/5.webp',
  img4: '../assets/3.webp',
  img5: '../assets/4.webp'
}

export function Galeria() {
  return (
    <div className='tweet'>
      <img src={avatarempresa} alt="" />

      <div className='tweet-content'>
        <div className='tweet-content-header'>
          <strong>Felipe Neneu</strong>
          <span>@Dev</span>
        </div>
        <h2>Explore</h2>
        <p>🌟 Confira meus trabalhos! 🌟<br />
          🎨💡 Criações únicas e criativas para dar vida às suas ideias! <br />
          😊✨ Estou ansioso para saber o que você achou!</p>
        <br />
        <div className='galeriaimg'>
          <img src={imggallery.img1} alt="" />
          <img src={imggallery.img5} alt="" />
          <img src={imggallery.img2} alt="" />
          <img src={imggallery.img4} alt="" />
          <img src={imggallery.img3} alt="" />


        </div>
        <br />
        <h2>Confira este vídeo!</h2>
        <p>🎥 <strong>Confira esses motions incríveis!</strong><br />
          ✨ Animações que dão vida às ideias e elevam qualquer projeto.</p>
        <br />
        <div className='motions'>
          <video controls autoPlay loop muted>
            <source src="../assets/Motion Eleição_3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video controls autoPlay loop muted>
            <source src="../assets/LogoStorys.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}
