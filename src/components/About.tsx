import './Tweet.css'
import { Slider } from "./Slider"
import avatarempresa from '../assets/Ativo 2.png'
import dono from '../assets/Felipe-Avatar.jpg'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function UsarTitulo(titulo: string): void {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/about') {
      document.title = titulo;
    }
  }, [location, titulo]);
}

export function About() {
  UsarTitulo('Contato');
  return (
    <div className='tweet'>
      <img src={avatarempresa} alt="" />

      <div className='tweet-content'>
        <div className='tweet-content-header'>
          <strong>Felipe Neneu</strong>
          <span>@Dev</span>
        </div>
        <div className='nosite'>
          <img className='dono' src={dono} alt="" />
          <h2>Quem sou eu?</h2>
          <p>🎨 Sou Desenvolvedor, Designer e Social Media,
            com mais de 2 anos de experiência no mercado como freelancer.
            Especialista em marketing digital e cursando Análise e
            Desenvolvimento de Sistemas, trago uma visão estratégica e
            técnica para cada projeto. Com conhecimentos em programação,
            aliado a uma sólida base em design gráfico, domino ferramentas como Photoshop,
            CorelDRAW e Illustrator. Estou em constante aprendizado para oferecer soluções
            inovadoras e criativas que atendam às necessidades dos meus clientes.</p>
        </div>
        <Slider />
      </div>
    </div>
  )
}
