import cardapio from 'data/itens.json';
import s from './Inicio.module.scss';
import temaStyle from 'styles/Tema.module.scss';
export default function Inicio() {
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
  return (
    <section>
      <h3 className={temaStyle.titulo}>Recomendações da Cozinha</h3>
      <div className={s.recomendados}>
        {pratosRecomendados.map((item) => (
          <div key={item.id} className={s.recomendado}>
            <div className={s.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={s.recomendado__botao}>Ver mais</button>
          </div>
        ))}
      </div>
    </section>
  );
}
