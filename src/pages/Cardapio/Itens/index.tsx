import cardapio from './itens.json';
import Item from './Item';
import s from './Itens.module.scss';
import { useEffect, useState } from 'react';

interface Props {
  busca: string;
  filtro: number | null;
}
export default function Itens(props: Props) {
  const [lista, setLista] = useState(cardapio);
  const { busca, filtro } = props;

  function testaBusca(title: string) {
    const regex = new RegExp(busca, 'i');
    return regex.test(title);
  }

  function testaFiltro(id: number) {
    if (filtro !== null) return filtro === id;
    return true;
  }

  useEffect(() => {
    setLista(
      cardapio.filter(
        (item) => testaBusca(item.title) && testaFiltro(item.category.id),
      ),
    );
  }, [filtro, busca]);

  return (
    <div className={s.itens}>
      {lista.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
