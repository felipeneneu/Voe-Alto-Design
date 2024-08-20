import { BehanceLogo, Envelope, Hash, House, User } from '@phosphor-icons/react';
import voeLogo from '../assets/01.svg';
import logomedia from '../assets/logo-aguia.svg'
import './Sidebar.css'
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

        <NavLink to=''>
          <Hash />
          <span>Explore</span>
        </NavLink>

        <NavLink to='https://www.behance.net/felipenight' target="_blank">
          <BehanceLogo />
          <span>
            My Portfolio</span>
        </NavLink>
        <NavLink to='/contato'>
          <Envelope />
          <span>Contato</span>
        </NavLink>
        <NavLink to='https://github.com/felipeneneu'>
          <GithubLogo />
          <span> GitHub</span></NavLink>
        <NavLink to='https://www.instagram.com/felipeneneu/'>
          <InstagramLogo />
          <span> Meu Perfil</span></NavLink>
        <NavLink to='/about'>
          <User />
          <span> Sobre Mim</span></NavLink>

      </nav>

      <button className='new-tweet' type='button'>
        My Portfolio
      </button>

    </aside>
  )
}