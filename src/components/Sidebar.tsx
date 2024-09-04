import { BehanceLogo, Envelope, Hash, House, User } from '@phosphor-icons/react';
import './Sidebar.css'
import voeLogo from '../assets/01.svg';
import logomedia from '../assets/logo-aguia.svg'
import { NavLink } from 'react-router-dom';
import { GithubLogo } from '@phosphor-icons/react/dist/ssr/GithubLogo';
import { InstagramLogo } from '@phosphor-icons/react/dist/ssr/InstagramLogo';

export function Sidebar() {
  return (
    <aside className='sidebar'>
      <img className='logo' src={voeLogo} alt="logo" />
      <img className='logo-cel' src={logomedia} alt="logo" />

      <nav className='main-navagation'>

        <NavLink to='/'>
          <House weight='fill' />
          <span>Home</span>
        </NavLink>

        <NavLink to='/explore'>
          <Hash />
          <span>Explore</span>
        </NavLink>

        <NavLink to='https://www.behance.net/felipenight' target="_blank">
          <BehanceLogo />
          <span>
            Behance</span>
        </NavLink>

        <NavLink to='https://github.com/felipeneneu' target="_blank">
          <GithubLogo />
          <span> GitHub</span></NavLink>
        <NavLink to='https://www.instagram.com/felipeneneu/' target="_blank">
          <InstagramLogo />
          <span> Meu Perfil</span></NavLink>
        <NavLink to='/about'>
          <User />
          <span> Sobre Mim</span></NavLink>
        <NavLink to='/contato'>
          <Envelope />
          <span>Contato</span>
        </NavLink>

      </nav>

      <button className='new-tweet'>
        <NavLink to='https://www.instagram.com/felipeneneu/' target="_blank">
          Meu Portfolio</NavLink>
      </button>

    </aside>
  )
}