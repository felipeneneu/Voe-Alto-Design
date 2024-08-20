import Avatar from '../assets/avatar.png'
import './Slider.css'


export function Slider() {

  return (

    <div className="slide-container">
      <div className="wrapper">
        <div className="clash-card barbarian">
          <div className="clash-card__image clash-card__image--barbarian">
            <img className='avatar-um' src={Avatar} alt="barbarian" />
          </div>
          <div className="clash-card__level clash-card__level--barbarian">Cto</div>
          <div className="clash-card__unit-name">Felipe Neneu</div>
          <div className="clash-card__unit-description">
            Sou Designer desde os 12 Anos de idade, começou por hobby, motivado a fazer design de sites de animes, aprendi html e css nessa epoca, trabalho com Photoshop e Illustrator para fazer Identidade Visual, flayers, posts para instagram, reels motion design
          </div>

          <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
            <div className="one-third">
              <div className="stat">100<sup>S</sup></div>
              <div className="stat-value">Design</div>
            </div>

            <div className="one-third">
              <div className="stat">16</div>
              <div className="stat-value">Speed</div>
            </div>

            <div className="one-third no-border">
              <div className="stat">150</div>
              <div className="stat-value">Cost</div>
            </div>

          </div>

        </div>
      </div>
      <div>
        <h2>SOBRE MIM</h2>
        <br />
        <p className='texto-name'>Sou Desenvolvedor, Designer e Social Media. Freelancer com mais de 2 anos de experiência.
          <br /> <br />
          Developer e Especialista em marketing digital, Cursa Analise e desenvolvimento de sistemas.
          Trabalha com Design Gráfico. Hoje é estou estudando programação
          para ser o melhor marketeiro digital.
        </p><br /><br />
        <button className='new-tweet' type='button'>
          My Portfolio
        </button>
      </div>


    </div>



  )
}