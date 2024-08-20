import { BehanceLogo, DotsThreeCircle, Envelope, Hash, House, User } from '@phosphor-icons/react';
import voeLogo from '../assets/logo-voe-alto.svg';
import './Sidebar.css'
import { NavLink } from 'react-router-dom';
import { GithubLogo } from '@phosphor-icons/react/dist/ssr/GithubLogo';
import { InstagramLogo } from '@phosphor-icons/react/dist/ssr/InstagramLogo';

export function Sidebar() {
  return (
    <aside className='sidebar'>
      <img className='logo' src={voeLogo} alt="logo" />

      <nav className='main-navagation'>

        <NavLink to='/'>
          <House weight='fill' />
          Home
        </NavLink>

        <NavLink to=''>
          <Hash />
          Explore
        </NavLink>

        <NavLink to='https://www.behance.net/felipenight' target="_blank">
          <BehanceLogo />
          My Portfolio</NavLink>
        <NavLink to='/contato'>
          <Envelope />
          Contato</NavLink>
        <NavLink to='https://github.com/felipeneneu'>
          <GithubLogo />
          GitHub</NavLink>
        <NavLink to='https://www.instagram.com/felipeneneu/'>
          <InstagramLogo />
          Meu Perfil</NavLink>
        <NavLink to='/about'>
          <User />
          Sobre Mim</NavLink>
        <NavLink to=''>
          <DotsThreeCircle />
          More</NavLink>

      </nav>

      <button className='new-tweet' type='button'>
        My Portfolio
      </button>

    </aside>
  )
}