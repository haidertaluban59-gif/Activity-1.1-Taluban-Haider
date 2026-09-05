'use client';

import { useState } from 'react';
import NavigationItem from '../molecules/NavigationItem';

export default function HeaderNavigation() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="header">
      <div className="container header-inner">

        <a
          className="brand"
          href="/Activity-1.1-Taluban-Haider/"
        >
          Pangasinan Heritage
        </a>

        <button
          className="menu-btn"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          ☰
        </button>

        <nav
          className={`nav ${open ? 'open' : ''}`}
          aria-label="Main navigation"
        >

          <NavigationItem
            href="/Activity-1.1-Taluban-Haider/"
            onClick={closeMenu}
          >
            Home
          </NavigationItem>

          <NavigationItem
            href="/Activity-1.1-Taluban-Haider/heritage"
            onClick={closeMenu}
          >
            Heritage Sites
          </NavigationItem>

          <NavigationItem
            href="/Activity-1.1-Taluban-Haider/about"
            onClick={closeMenu}
          >
            About
          </NavigationItem>

          <NavigationItem
            href="/Activity-1.1-Taluban-Haider/contact"
            onClick={closeMenu}
          >
            Contact
          </NavigationItem>

        </nav>
      </div>
    </header>
  );
}