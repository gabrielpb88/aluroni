import s from './Menu.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  const rotas = [
    {
      label: 'Início',
      to: '/',
    },
    {
      label: 'Cardápio',
      to: '/cardapio',
    },
    {
      label: 'Sobre',
      to: '/sobre',
    },
  ];
  return (
    <nav className={s.menu}>
      <Logo />
      <ul className={s.menu__list}>
        {rotas.map((rota, index) => (
          <li key={index} className={s.menu__link}>
            <Link to={rota.to}>{rota.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
