import s from './Menu.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import React from 'react';

export default function Menu() {
  return (
    <nav className={s.menu}>
      <Logo />
    </nav>
  );
}
