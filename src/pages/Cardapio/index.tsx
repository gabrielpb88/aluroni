import s from './Cardapio.module.scss';
import React, { useState } from 'react';
import Buscador from './Buscador';
import Filtros from './Filtros';
import Ordenador, { OpcoesOrdenador } from './Ordenador';
import Itens from './Itens';
export default function Cardapio() {
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState<OpcoesOrdenador>('');
  return (
    <section className={s.cardapio}>
      <h3 className={s.cardapio__titulo}>Cardápio</h3>
      <Buscador busca={busca} setBusca={setBusca} />
      <div className={s.cardapio__filtros}>
        <Filtros filtro={filtro} setFiltro={setFiltro} />
        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
      </div>
      <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
    </section>
  );
}
