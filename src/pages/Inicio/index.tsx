import cardapio from 'data/cardapio.json';
import s from './Inicio.module.scss';
import temaStyle from 'styles/Tema.module.scss';
import nossaCasa from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { Prato } from 'types/Prato';

export default function Inicio() {
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  const navigate = useNavigate();
  function redirecionarParaDetalhes(prato: Prato) {
    navigate(`/prato/${prato.id}`, { state: { prato } });
  }
  return (
    <section>
      <h3 className={temaStyle.titulo}>Recomendações da Cozinha</h3>
      <div className={s.recomendados}>
        {pratosRecomendados.map((item) => (
          <div key={item.id} className={s.recomendado}>
            <div className={s.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button
              className={s.recomendado__botao}
              onClick={() => {
                redirecionarParaDetalhes(item);
              }}>
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={temaStyle.titulo}>Nossa casa</h3>
      <div className={s.nossaCasa}>
        <img src={nossaCasa} alt="Casa do aluroni" />
        <div className={s.nossaCasa__endereco}>
          Rua Vergueiro, 3185 <br />
          <br /> Vila Mariana - SP
        </div>
      </div>
    </section>
  );
}
