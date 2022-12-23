import filtros from './filtros.json';
import s from './Filtros.module.scss';
import classNames from 'classnames';

type IOpcao = typeof filtros[0];

interface Props {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filtros({ filtro, setFiltro }: Props) {
  function selecionarFiltro(opcao: IOpcao) {
    if (filtro === opcao.id) {
      return setFiltro(null);
    }
    return setFiltro(opcao.id);
  }
  return (
    <div className={s.filtros}>
      {filtros.map((opcao) => (
        <button
          className={classNames({
            [s.filtros__filtro]: true,
            [s['filtros__filtro--ativo']]: filtro === opcao.id,
          })}
          key={opcao.id}
          onClick={() => selecionarFiltro(opcao)}>
          {opcao.label}
        </button>
      ))}
    </div>
  );
}
