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
          <div className="clash-card__level clash-card__level--barbarian">Dev, Designer & Social Media</div>
          <div className="clash-card__unit-name">Felipe Neneu</div>
          <div className="clash-card__unit-description">
            Desenvolvedor, Designer e Social Media com 2+ anos de experiência. Especialista em marketing digital,
            cursando Análise e Desenvolvimento de Sistemas.
            Experiência em Photoshop, CorelDRAW e Illustrator. Foco em soluções inovadoras e criativas.
          </div>

          <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
            <div className="one-third">
              <div className="stat">DEV<sup></sup></div>
              <div className="stat-value">Full-Stack</div>
            </div>

            <div className="one-third">
              <div className="stat">DESIGN </div>
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
        <p className='texto-name'>Sou Desenvolvedor, Designer e Social Media,
          com mais de 2 anos de experiência no mercado como freelancer.
          <br /> <br />

          Especialista em marketing digital e cursando Análise e
          Desenvolvimento de Sistemas, trago uma visão estratégica e
          técnica para cada projeto. Com conhecimentos em programação,
          aliado a uma sólida base em design gráfico, domino ferramentas como Photoshop,
          CorelDRAW e Illustrator. Estou em constante aprendizado para oferecer soluções
          inovadoras e criativas que atendam às necessidades dos meus clientes.
        </p><br /><br />
        <button className='new-tweet' type='button'>
          Meu Portfolio
        </button>
      </div>


    </div>



  )
}