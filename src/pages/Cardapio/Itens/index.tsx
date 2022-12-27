import cardapio from '../../../data/cardapio.json';
import Item from './Item';
import s from './Itens.module.scss';
import { useEffect, useState } from 'react';
import { Cardapio, Prato } from 'types/Prato';

interface Props {
  busca: string;
  filtro: number | null;
  ordenador: string;
}
export default function Itens(props: Props) {
  const [lista, setLista] = useState<Cardapio>(cardapio);
  const { busca, filtro, ordenador } = props;

  function testaBusca(title: string): boolean {
    const regex = new RegExp(busca, 'i');
    return regex.test(title);
  }

  function testaFiltro(id: number): boolean {
    if (filtro !== null) return filtro === id;
    return true;
  }

  const ordenarPropriedadeCrescente = (
    lista: Cardapio,
    propriedade: keyof Pick<Prato, 'size' | 'serving' | 'price'>,
  ) => {
    return lista.sort((a, b) => (a[propriedade] > b[propriedade] ? 1 : -1));
  };

  function ordenar(novaLista: Cardapio) {
    switch (ordenador) {
      case 'porcao':
        return ordenarPropriedadeCrescente(novaLista, 'size');
      case 'qtd_pessoas':
        return ordenarPropriedadeCrescente(novaLista, 'serving');
      case 'preco':
        return ordenarPropriedadeCrescente(novaLista, 'price');
      default:
        return novaLista;
    }
  }

  useEffect(() => {
    const novaLista = cardapio.filter(
      (item) => testaBusca(item.title) && testaFiltro(item.category.id),
    );
    setLista(ordenar(novaLista));
  }, [filtro, busca, ordenador]);

  return (
    <div className={s.itens}>
      {lista.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
