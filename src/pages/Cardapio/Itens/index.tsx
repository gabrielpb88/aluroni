import cardapio from './itens.json';
import Item from './Item';
import s from './Itens.module.scss';
export default function Itens() {
  return (
    <div className={s.itens}>
      {cardapio.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
