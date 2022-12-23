import s from './Cardapio.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import React, { useState } from 'react';
import Buscador from './Buscador';
export default function Cardapio() {
  const [busca, setBusca] = useState('');
  return (
    <main>
      <nav className={s.menu}>
        <Logo />
      </nav>
      <header className={s.header}>
        <div className={s.header__text}>A casa do código e da massa</div>
      </header>
      <section className={s.cardapio}>
        <h3 className={s.cardapio__titulo}>Cardápio</h3>
        <Buscador busca={busca} setBusca={setBusca} />
      </section>
    </main>
  );
}
