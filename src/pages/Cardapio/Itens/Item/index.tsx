import s from './Item.module.scss';
import { Prato } from 'types/Prato';
import TagsPrato from 'components/TagsPrato';
import { useNavigate } from 'react-router-dom';
import { memo } from 'react';

function Item(props: Prato) {
  const { id, title, description, photo } = props;
  const navigate = useNavigate();
  id == 1 && console.log('aqui');
  return (
    <div
      className={s.item}
      onClick={() => {
        navigate(`/prato/${id}`);
      }}>
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

export default memo(Item);
