import s from './Item.module.scss';
import cardapio from '../itens.json';
import classNames from 'classnames';

type Props = typeof cardapio[0];
export default function Item(props: Props) {
  const { title, size, category, description, photo, price, serving } = props;
  return (
    <div className={s.item}>
      <div className={s.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={s.item__descricao}>
        <div className={s.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={s.item__tags}>
          <div
            className={classNames({
              [s.item__tipo]: true,
              [s[`item__tipo__${category.label.toLowerCase()}`]]: true,
            })}>
            {category.label}
          </div>
          <div className={s.item__porcao}>{size}g</div>
          <div className={s.item__qtdpessoas}>
            Serve {serving} pessoa{serving > 1 && 's'}
          </div>
          <div className={s.item__valor}>R${price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}
