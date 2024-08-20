import { ArrowClockwise, ChatCircle, Heart } from '@phosphor-icons/react'
import './Tweet.css'
import imagem1 from '../assets/01.png'


export function Tweet() {
  return (
    <a href='#' className='tweet'>
      <img src="https://openseauserdata.com/files/4c7b1857e28506d0097052584355f4f3.png" alt="" />

      <div className='tweet-content'>
        <div className='tweet-content-header'>
          <strong>Felipe Neneu</strong>
          <span>@Cto</span>
        </div>
        <h2>Potencialize Sua Campanha</h2>
        <h3>com Materiais Políticos Digitais!</h3>
        <br />

        <p>Em uma campanha política, a presença digital é fundamental para engajar e convencer eleitores.
          Oferecemos serviços especializados em criação de <strong>motion graphics</strong> e <strong>posts para redes sociais</strong>,
          todos projetados para fortalecer a imagem do seu candidato e comunicar suas propostas de forma eficaz.</p>

        <br />
        <h3>Motion Graphics</h3>
        <p>Animações dinâmicas e impactantes que dão vida às ideias da campanha, perfeitas para destacar nas redes sociais e atrair a atenção dos eleitores.</p>
        <br />
        <h3>Posts Personalizados</h3>

        <p>Criação de artes visuais para posts em redes sociais, alinhadas à identidade visual da campanha, destacando propostas, eventos e mensagens importantes.</p>
        <br />
        <strong>💡 Por que Escolher Nossos Serviços?</strong>
        <li>Design focado em resultados, alinhado com os objetivos da sua campanha.</li>
        <li>Entrega rápida e suporte dedicado durante todo o processo.</li>
        <li>Materiais que se destacam e ajudam a conquistar votos.</li>
        <br />
        <img className='post' src={imagem1} alt="" />

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