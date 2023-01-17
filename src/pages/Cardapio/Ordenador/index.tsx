import classNames from 'classnames';
import opcoes from './opcoes.json';
import s from './Ordenador.module.scss';
import React, { memo, useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

export type OpcoesOrdenador = '' | 'porcao' | 'qtd_pessoas' | 'preco';

interface IOrdenador {
  ordenador: OpcoesOrdenador;
  setOrdenador: React.Dispatch<React.SetStateAction<OpcoesOrdenador>>;
}

function Ordenador({ ordenador, setOrdenador }: IOrdenador) {
  const [aberto, setAberto] = useState(false);
  const nomeOrdenador =
    ordenador && opcoes.find((opcao) => opcao.value === ordenador)?.nome;
  return (
    <button
      className={classNames({
        [s.ordenador]: true,
        [s['ordenador--ativo']]: ordenador !== '',
      })}
      onClick={() => setAberto(!aberto)}
      onBlur={() => setAberto(false)}>
      <span>{nomeOrdenador || 'Ordenar Por'}</span>
      {aberto ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [s.ordenador__options]: true,
          [s['ordenador__options--ativo']]: aberto,
        })}>
        {opcoes.map((opcao) => (
          <div
            className={s.ordenador__option}
            key={opcao.value}
            onClick={() => setOrdenador(opcao.value as OpcoesOrdenador)}>
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  );
}

export default memo(Ordenador);
