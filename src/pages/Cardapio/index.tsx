import s from './Cardapio.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
export default function Cardapio() {
  return (
    <main>
      <nav className={s.menu}>
        <Logo />
      </nav>
      <header className={s.header}>
        <div className={s.header__text}>A casa do código e da massa</div>
      </header>
    </main>
  );
}
