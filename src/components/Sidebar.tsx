import { Bell, BookBookmark, DotsThreeCircle, Envelope, FileText, Hash, House, User } from '@phosphor-icons/react';
import voeLogo from '../assets/logo-voe-alto.svg';
import './Sidebar.css'

export function Sidebar() {
  return (
    <aside className='sidebar'>
      <img className='logo' src={voeLogo} alt="logo" />

      <nav className='main-navagation'>

        <a className='active' href=''>
          <House weight='fill' />
          Home
        </a>

        <a href=''>
          <Hash />
          Explore
        </a>

        <a href=''>
          <Bell />
          Notifications</a>
        <a href=''>
          <Envelope />
          Messages</a>
        <a href=''>
          <BookBookmark />
          Bookmarks</a>
        <a href=''>
          <FileText />
          Lists</a>
        <a href=''>
          <User />
          Profile</a>
        <a href=''>
          <DotsThreeCircle />
          More</a>

      </nav>

      <button className='new-tweet' type='button'>
        Tweet
      </button>

    </aside>
  )
}