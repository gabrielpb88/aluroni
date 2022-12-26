import s from './Cardapio.module.scss';
import React, { useState } from 'react';
import Buscador from './Buscador';
import Filtros from './Filtros';
import Ordenador, { OpcoesOrdenador } from './Ordenador';
import Itens from './Itens';
import temaStyle from 'styles/Tema.module.scss';

export default function Cardapio() {
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState<OpcoesOrdenador>('');
  return (
    <section>
      <h3 className={temaStyle.titulo}>Cardápio</h3>
      <Buscador busca={busca} setBusca={setBusca} />
      <div className={s.cardapio__filtros}>
        <Filtros filtro={filtro} setFiltro={setFiltro} />
        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
      </div>
      <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
    </section>
  );
}
