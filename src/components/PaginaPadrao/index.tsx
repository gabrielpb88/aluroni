import s from './PaginaPadrao.module.scss';
import React from 'react';
import { Outlet } from 'react-router-dom';
import temaStyle from 'styles/Tema.module.scss';

export default function PaginaPadrao({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      <header className={s.header}>
        <div className={s.header__text}>A casa do código e da massa</div>
      </header>
      <div className={temaStyle.container}>
        <Outlet />
        {children}
      </div>
    </>
  );
}
