import s from './Buscador.module.scss';
import { CgSearch } from 'react-icons/cg';
import { memo, useMemo } from 'react';
interface Props {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}
function Buscador({ busca, setBusca }: Props) {
  const elementoSearch = useMemo(
    () => <CgSearch size={20} color="#4C4D5E" />,
    [],
  );
  return (
    <div className={s.buscador}>
      <input
        type="text"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        placeholder="Buscar"
      />
      {elementoSearch}
    </div>
  );
}

export default memo(Buscador);
