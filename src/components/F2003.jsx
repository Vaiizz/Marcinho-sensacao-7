import F2003 from '../assets/Michael_Schumacher_2003.jpg'

export default function F1_2003() {
  return (
    <div className='w-1/5 mx-4 text-center'>
      <h2 className='text-2xl font-bold mx-4'>F2003</h2>
      <img src={F2003} alt="Ferrari F2003" />
      <p className='text-lg  text-center'>O F2003-GA é o modelo da Ferrari da temporada de 2003 da F-1. Condutores: Michael Schumacher e Rubens Barrichello. Os pilotos utilizaram esse chassi a partir do GP da Espanha até o final da temporada. O "GA" que aparece no chassi, é em homenagem a Gianni Agnelli, que faleceu em janeiro de 2003. Com o chassi F2003-GA, a equipe conquistou o campeonato de pilotos com Schumacher e o de construtores em 2003.</p>
      <a className='text-lg' href="https://pt.wikipedia.org/wiki/Ferrari_F2003GA">Veja Mais</a>
    </div>
  )
}
