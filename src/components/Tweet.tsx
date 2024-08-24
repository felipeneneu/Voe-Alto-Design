import { ArrowClockwise, ChatCircle, Heart } from '@phosphor-icons/react'
import './Tweet.css'
import imagem1 from '../assets/01.png'
import art1 from '../assets/art3.png'
import art2 from '../assets/art4.png'
import avatarempresa from '../assets/Ativo 2.png'


export function Tweet() {
  return (
    <div className='tweet'>
      <img src={avatarempresa} alt="" />

      <div className='tweet-content'>
        <div className='tweet-content-header'>
          <strong>Felipe Neneu</strong>
          <span>@Dev</span>
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
        <img className='post' src={art1} alt="" />
        <img className='post' src={imagem1} alt="" />
        <img className='post' src={art2} alt="" />

        <div className='tweet-content-footer'>
          <button type='button'>
            <ChatCircle />
            20k
          </button>
          <button type='button'>
            <ArrowClockwise />
            20k
          </button>
          <button type='button'>
            <Heart />
            20k
          </button>
        </div>
      </div>
    </div>

  )
}