import s from './Item.module.scss';
import { Prato } from 'types/Prato';
import TagsPrato from 'components/TagsPrato';

export default function Item(props: Prato) {
  const { title, description, photo } = props;
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
        <TagsPrato {...props} />
      </div>
    </div>
  );
}
