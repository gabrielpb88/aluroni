import s from './Cardapio.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import React, { useState } from 'react';
import Buscador from './Buscador';
import Filtros from './Filtros';
import Ordenador from './Ordenador';
import Itens from './Itens';
export default function Cardapio() {
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState('');
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
        <div className={s.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro} />
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
        </div>
        <Itens />
      </section>
    </main>
  );
}
