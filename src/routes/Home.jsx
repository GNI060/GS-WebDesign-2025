import React from 'react';
import Carrossel from '../components/Carrossel.jsx'


const stats = [
  { id: 1, name: 'Pessoas impactadas', value: '3.3M+' },
  { id: 2, name: 'Estados afetados', value: '14' },
  { id: 3, name: 'Mortes registradas', value: '170+' },
  { id: 4, name: 'Ajuda enviada (R$)', value: 'R$ 70M' },
];

export default function Home() {
  return (
    <>
      <section
  className="relative w-full bg-cover bg-center bg-no-repeat text-white min-h-screen flex items-center justify-center px-4 sm:px-12 lg:px-24"
  style={{ backgroundImage: "url('/enchenteFoto2.jpg')" }}
>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold drop-shadow-lg mb-6">
            As Enchentes no Brasil
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed">
            O Brasil enfrenta desafios crescentes com enchentes que impactam milhares de vidas anualmente. Entenda como a tecnologia pode ajudar a prevenir e minimizar essas tragédias anunciadas.
          </p>
        </div>
      </section>

      <section id="introdução" className="bg-white py-16 px-6 sm:px-12 lg:px-24">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div>
      <p className="leading-relaxed mb-4">
        As enchentes no Brasil são fenômenos recorrentes, causados principalmente pelo excesso de chuvas, especialmente nos meses de verão. Elas ocorrem quando a quantidade de água da chuva ultrapassa a capacidade de absorção do solo e de escoamento dos rios e sistemas de drenagem urbana. Isso é agravado por fatores como desmatamento, ocupação irregular de áreas de risco, impermeabilização do solo (com asfalto e concreto) e falta de infraestrutura adequada nas cidades.
      </p>
      <p className="leading-relaxed">
        As regiões mais afetadas costumam ser áreas urbanas de grandes centros e encostas, onde deslizamentos também podem ocorrer. As enchentes provocam prejuízos materiais, deslocamento de pessoas, perdas de vidas e impactos ambientais e sociais significativos. O problema exige ações integradas de planejamento urbano, preservação ambiental e uso da tecnologia para prevenção e resposta rápida.
      </p>
    </div>
    <div>
      <img src="/mapaBrasil.avif" alt="Mapa do Brasil" className="rounded-lg w-full"/>
    </div>
  </div>
</section>

<section id="impactos" className="mt-20 flex flex-col lg:flex-row items-center bg-white rounded-lg overflow-hidden">
  <div className="w-full lg:w-1/2">
    <img src="/enchenteFoto1.webp" alt="" className="object-cover w-full max-w-full h-full rounded-xl" />
  </div>

  <div className="w-full lg:w-1/2 p-8">
    <h2 className="text-3xl lg:text-4xl font-bold mt-2 text-gray-900">
      Impacto das enchentes
    </h2>
    <p className="mt-4">
      As enchentes no Brasil deixaram de ser tragédias imprevisíveis para se tornarem eventos
      recorrentes, com impactos devastadores à população e à economia. De 1991 a 2022, mais de
      21 mil inundações foram registradas, afetando mais de 110 milhões de pessoas. Apenas em
      2023, mais de 3,3 milhões de brasileiros foram impactados por eventos hidrológicos
      extremos. Em 2024, o Rio Grande do Sul viveu uma das maiores tragédias ambientais de sua
      história, com mais de 170 mortos e cidades inteiras submersas. Esses eventos escancaram
      a urgência de soluções eficazes e tecnológicas para mitigar os danos causados por
      desastres naturais.
    </p>

    <div className="grid grid-cols-2 gap-6 mt-6">
      {stats.map((stat) => (
        <div key={stat.id}>
          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          <p className="text-sm">{stat.name}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      <section id="tecnologia" className="bg-white py-12 px-6 sm:px-12 lg:px-24 text-center">
  <h2 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-6">
    Como a tecnologia<br className="hidden sm:inline" /> pode ajudar a evitar enchentes no Brasil?
  </h2>
  <p className="max-w-3xl mx-auto text-lg leading-relaxed">
    A tecnologia ajuda a prevenir enchentes ao monitorar em tempo real a chuva e o nível dos rios, permitindo alertas antecipados. Softwares de simulação auxiliam no planejamento urbano para evitar áreas de risco e melhorar a drenagem. Infraestruturas inteligentes controlam o fluxo da água para evitar acúmulos. Além disso, plataformas digitais facilitam a comunicação rápida entre autoridades e população, enquanto aplicativos informam moradores sobre riscos e orientações. Assim, a tecnologia reduz os danos causados pelas enchentes e protege vidas.
  </p>
</section>

      <section id="solução" className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Nossa Solução</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Para combater isso, sensores inteligentes serão instalados em áreas vulneráveis, monitorando em tempo real o nível da água, a chuva e o comportamento dos rios.

Esses dispositivos usam tecnologias como IoT e sensores de nível para detectar sinais de perigo e enviar alertas automáticos para a população e autoridades. Com isso, é possível agir com rapidez, evitar tragédias e salvar vidas.
        </p>
      </div>
      <div>
  <Carrossel />
</div>

    </div>
    <div className="mt-12">
      <video
        className="rounded-lg shadow-lg w-full"
        controls
        src="/caminho-do-video.mp4"
        type="video/mp4"
      >
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
  </div>
</section>



    </>
  );
}
