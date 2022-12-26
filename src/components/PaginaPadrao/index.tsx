import s from './PaginaPadrao.module.scss';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function PaginaPadrao() {
  return (
    <>
      <header className={s.header}>
        <div className={s.header__text}>A casa do código e da massa</div>
      </header>
      <Outlet />
    </>
  );
}
