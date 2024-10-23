import { NextResponse } from "next/server";

interface NumerologiaResponse {
  numero: number;
  significado: NumerologiaSignific;
}
export interface NumerologiaSignific {
  id: number;
  title: string;
  description: string;
  pontos_positivos: string[];
  pontos_negativos: string[];
  influencias: {
    carreira: string;
    relacionamentos: string;
    desenvolvimento_pessoal: string;
  };
}

export async function POST(request: Request) {
  const { nome }: { nome: string } = await request.json();
  const numerologia: NumerologiaResponse = calcularNumerologia(nome);

  return NextResponse.json({ numerologia });
}

// Função para calcular numerologia com base no nome
function calcularNumerologia(nome: string): NumerologiaResponse {
  const numeros: { [key: string]: number } = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 1,
    K: 2,
    L: 3,
    M: 4,
    N: 5,
    O: 6,
    P: 7,
    Q: 8,
    R: 9,
    S: 1,
    T: 2,
    U: 3,
    V: 4,
    W: 5,
    X: 6,
    Y: 7,
    Z: 8,
  };
  const nomeUpper = nome.toUpperCase().replace(/[^A-Z]/g, ""); // Remove caracteres não alfabéticos
  const soma = [...nomeUpper].reduce(
    (total, letra) => total + numeros[letra],
    0
  );

  const resultadoFinal = reduzirNumero(soma);

  const significados: NumerologiaSignific[] = [
    {
      id: 1,
      title: "O Pioneiro",
      description:
        "O número 1 simboliza liderança, independência e inovação. É considerado o início de tudo, representando a capacidade de iniciar projetos e abrir novos caminhos.",
      pontos_positivos: [
        "Iniciativa e Coragem: Indivíduos influenciados pelo número 1 são proativos e não hesitam em tomar a dianteira em situações desafiadoras.",
        "Autoconfiança: Possuem uma forte confiança em suas habilidades, o que lhes permite perseguir objetivos ambiciosos.",
        "Criatividade: Tendem a gerar ideias inovadoras e soluções originais para problemas complexos.",
      ],
      pontos_negativos: [
        "Teimosia: Podem ser inflexíveis em suas opiniões, dificultando a adaptação a novas perspectivas.",
        "Impaciência: A urgência em alcançar resultados pode levar à frustração quando as coisas não acontecem rapidamente.",
        "Autoritarismo: Às vezes, sua necessidade de controle pode manifestar-se como comportamento autoritário.",
      ],
      influencias: {
        carreira:
          "Pessoas com essa influência frequentemente se destacam em posições de liderança, empreendedorismo ou em áreas que exigem inovação constante.",
        relacionamentos:
          "Podem assumir o papel de líderes no relacionamento, o que pode ser positivo, desde que evitem comportamentos dominantes.",
        desenvolvimento_pessoal:
          "Devem trabalhar para equilibrar sua necessidade de controle com a capacidade de confiar nos outros, promovendo uma convivência mais harmoniosa.",
      },
    },
    {
      id: 2,
      title: "O Diplomata",
      description:
        "O número 2 está associado à cooperação, equilíbrio e sensibilidade. Representa a dualidade e a busca por harmonia nas relações.",
      pontos_positivos: [
        "Empatia: São capazes de se conectar profundamente com as emoções alheias, mostrando compreensão e apoio.",
        "Paciência: Demonstram calma e perseverança, especialmente em situações que requerem negociação.",
        "Habilidade para Mediar Conflitos: Utilizam sua diplomacia para resolver desentendimentos de maneira pacífica.",
      ],
      pontos_negativos: [
        "Passividade: Podem evitar tomar decisões firmes, deixando-se levar pela opinião dos outros.",
        "Indecisão: A dificuldade em escolher entre opções pode levar à inação.",
        "Dificuldade em Estabelecer Limites: Podem permitir que outros ultrapassem seus limites pessoais, por medo de confrontação.",
      ],
      influencias: {
        carreira:
          "Excelentes em roles que exigem negociação, mediação ou trabalho em equipe, como diplomatas, conselheiros ou recursos humanos.",
        relacionamentos:
          "Buscam parceiros que valorizem a harmonia e a cooperação, evitando conflitos sempre que possível.",
        desenvolvimento_pessoal:
          "É importante que aprendam a assertividade, para expressar suas necessidades e estabelecer limites saudáveis.",
      },
    },
    {
      id: 3,
      title: "O Comunicador",
      description:
        "O número 3 denota criatividade, expressão e sociabilidade. Está associado à comunicação eficaz e à expansão pessoal.",
      pontos_positivos: [
        "Otimismo: Mantêm uma atitude positiva, mesmo diante de desafios, o que inspira confiança nos outros.",
        "Habilidades Comunicativas: Expressam-se com clareza e entusiasmo, facilitando a transmissão de ideias.",
        "Criatividade: Possuem uma imaginação fértil, que se manifesta em soluções inovadoras e pensamento original.",
      ],
      pontos_negativos: [
        "Dispersão: Podem ter dificuldade em focar em uma tarefa específica, pulando de uma atividade para outra sem conclusão.",
        "Superficialidade: Às vezes, podem abordar situações de maneira superficial, sem aprofundar nos detalhes.",
        "Tendência ao Exibicionismo: Podem buscar atenção excessiva, desviando o foco do trabalho em equipe para si mesmos.",
      ],
      influencias: {
        carreira:
          "Destacam-se em áreas que envolvem comunicação, como jornalismo, marketing, publicidade e artes cênicas.",
        relacionamentos:
          "São parceiros entusiastas e expressivos, valorizando a comunicação aberta e a diversão conjunta.",
        desenvolvimento_pessoal:
          "Devem trabalhar para canalizar sua energia criativa de maneira focada, evitando a dispersão em múltiplas atividades.",
      },
    },
    {
      id: 4,
      title: "O Construtor",
      description:
        "Representa estabilidade, organização e praticidade. O número 4 está ligado à construção de bases sólidas e à manutenção da ordem na vida.",
      pontos_positivos: [
        "Honestidade e Lealdade: Valorizam a integridade e a confiança, sendo parceiros e colegas confiáveis.",
        "Organização: Mantêm ambientes ordenados e estruturados, facilitando a eficiência.",
        "Determinação: Perseveram em seus objetivos, mostrando grande resistência e disciplina.",
      ],
      pontos_negativos: [
        "Rigidez: Podem ser inflexíveis, resistindo a mudanças ou novas ideias.",
        "Teimosia: Tendem a manter suas opiniões, mesmo quando confrontados com evidências contrárias.",
        "Resistência a Mudanças: Preferem manter o status quo, tendo dificuldade em se adaptar a novas situações.",
      ],
      influencias: {
        carreira:
          "Destacam-se em áreas que requerem organização, como contabilidade, engenharia e administração.",
        relacionamentos:
          "Buscam estabilidade e comprometimento, evitando relacionamentos voláteis.",
        desenvolvimento_pessoal:
          "Devem aprender a equilibrar a necessidade de estrutura com a abertura para novas possibilidades.",
      },
    },
    {
      id: 5,
      title: "O Explorador",
      description:
        "Simboliza liberdade, versatilidade e aventura. O número 5 está associado à busca constante por novas experiências e conhecimento.",
      pontos_positivos: [
        "Adaptabilidade: São versáteis e facilmente se ajustam a novas situações.",
        "Curiosidade: Possuem um espírito aventureiro e estão sempre abertos para explorar novos horizontes.",
        "Espontaneidade: Mantêm uma abordagem aberta e animada da vida, abraçando o inesperado.",
      ],
      pontos_negativos: [
        "Impaciência: Podem ter dificuldade em esperar por resultados a longo prazo.",
        "Instabilidade: Podem ter dificuldade em manter compromissos a longo prazo, tanto pessoais quanto profissionais.",
        "Dispersão: Sua busca incessante por novidade pode levá-los a se desviar de seus objetivos principais.",
      ],
      influencias: {
        carreira:
          "Adequados para profissões dinâmicas, como turismo, vendas e comunicação.",
        relacionamentos:
          "São parceiros apaixonados, mas podem ter dificuldade em manter relacionamentos duradouros.",
        desenvolvimento_pessoal:
          "Devem focar na consistência e aprender a equilibrar liberdade com responsabilidade.",
      },
    },
    {
      id: 6,
      title: "O Cuidador",
      description:
        "O número 6 representa responsabilidade, amor, harmonia e cuidado. Está associado à dedicação à família, amigos e comunidade, buscando sempre o bem-estar coletivo.",
      pontos_positivos: [
        "Empatia e Compaixão: São indivíduos profundamente carinhosos, sempre preocupados com o bem-estar alheio. Valorizam as conexões emocionais e são conhecidos por serem apoiadores constantes.",
        "Responsabilidade: Assumem suas obrigações com seriedade, sendo confiáveis e dedicados, tanto em suas carreiras quanto em suas vidas pessoais.",
        "Harmonia: Buscam constantemente o equilíbrio em todas as áreas da vida, promovendo a paz e evitando conflitos.",
      ],
      pontos_negativos: [
        "Auto-sacrifício Excessivo: Podem negligenciar suas próprias necessidades em prol dos outros, o que leva à exaustão emocional.",
        "Indecisão: Às vezes, têm dificuldade em tomar decisões que possam desagradar a outros, mesmo quando necessárias.",
        "Dependência Emocional: Podem se tornar excessivamente dependentes de seus relacionamentos, buscando validação externa para seu bem-estar.",
      ],
      influencias: {
        carreira:
          "Destacam-se em profissões que envolvem cuidado e serviço, como medicina, educação, trabalho social e terapia.",
        relacionamentos:
          "São parceiros dedicados e amorosos, valorizando a estabilidade familiar e o afeto.",
        desenvolvimento_pessoal:
          "Devem aprender a estabelecer limites saudáveis para garantir que suas próprias necessidades sejam atendidas enquanto cuidam dos outros.",
      },
    },
    {
      id: 7,
      title: "O Pensador",
      description:
        "O número 7 está associado à introspecção, análise e espiritualidade. Representa a busca pelo conhecimento profundo, pelo autoconhecimento e pela compreensão dos mistérios da vida.",
      pontos_positivos: [
        "Analiticidade: São pensadores profundos, capazes de analisar situações complexas com lógica e perspicácia.",
        "Espiritualidade: Buscam significado e propósito na vida, conectando-se frequentemente com práticas espirituais e filosóficas.",
        "Independência: Valorizam seu espaço pessoal e autonomia, preferindo ambientes de trabalho e estudo onde possam se concentrar sozinhos.",
      ],
      pontos_negativos: [
        "Isolamento: Podem se afastar socialmente em momentos de introspecção excessiva, perdendo oportunidades de interação.",
        "Perfeccionismo: A busca pela perfeição pode levar à procrastinação ou a expectativas pouco realistas.",
        "Desconfiança: Podem ser céticos, tendo dificuldade em confiar plenamente nos outros.",
      ],
      influencias: {
        carreira:
          "Excelentes em áreas que exigem análise profunda, como pesquisa científica, filosofia, psicologia e tecnologia.",
        relacionamentos:
          "Podem ser parceiros reservados, valorizando a compreensão mútua e o respeito pelo espaço pessoal.",
        desenvolvimento_pessoal:
          "Devem equilibrar sua necessidade de introspecção com a importância de conexões sociais, evitando o isolamento extremo.",
      },
    },
    {
      id: 8,
      title: "O Líder",
      description:
        "O número 8 está associado ao poder, à autoridade e ao sucesso material. Representa ambição, liderança e a capacidade de realizar objetivos concretos e tangíveis.",
      pontos_positivos: [
        "Liderança: São líderes natos, capazes de motivar e influenciar positivamente os outros em direção a metas compartilhadas.",
        "Ambição: Determinados e focados, estabelecem objetivos altos e trabalham com perseverança para alcançá-los.",
        "Praticidade: Têm uma abordagem pragmática, concentrando-se em soluções eficazes e resultados tangíveis.",
      ],
      pontos_negativos: [
        "Arrogância: Podem ser excessivamente confiantes, desconsiderando opiniões alheias ou demonstrando autoritarismo.",
        "Materialismo: Podem valorizar excessivamente o sucesso material, negligenciando aspectos emocionais e espirituais da vida.",
        "Controle Excessivo: A necessidade de controle pode resultar em conflitos interpessoais e dificuldades em delegar responsabilidades.",
      ],
      influencias: {
        carreira:
          "Destacam-se em negócios, gestão, finanças e áreas que requerem liderança e tomada de decisões estratégicas.",
        relacionamentos:
          "Podem ser parceiros dominantes, necessitando equilibrar seu desejo de controle com o respeito às necessidades do parceiro.",
        desenvolvimento_pessoal:
          "Devem aprender a valorizar aspectos não materiais da vida e a manter um equilíbrio entre trabalho e relações pessoais.",
      },
    },
    {
      id: 9,
      title: "O Humanitário",
      description:
        "O número 9 simboliza compaixão, altruísmo e a conclusão de ciclos. Está associado à sabedoria acumulada e ao desejo de ajudar os outros.",
      pontos_positivos: [
        "Compaixão: Indivíduos com influência do número 9 são profundamente empáticos e se preocupam genuinamente com o bem-estar alheio.",
        "Altruísmo: Tendem a colocar as necessidades dos outros acima das suas próprias, buscando o bem comum.",
        "Sabedoria: Possuem uma compreensão profunda da vida, frequentemente servindo como conselheiros para aqueles ao seu redor.",
      ],
      pontos_negativos: [
        "Auto-sacrifício Excessivo: Podem negligenciar suas próprias necessidades em prol dos outros, levando à exaustão física e emocional.",
        "Idealismo Irrealista: Às vezes, podem ter expectativas utópicas que não são práticas, o que pode gerar frustração.",
        "Dificuldade em Deixar Ir: Podem encontrar dificuldade em abandonar situações ou relacionamentos que não lhes fazem bem, devido ao seu desejo de ajudar.",
      ],
      influencias: {
        carreira:
          "São frequentemente atraídos para profissões que envolvem serviço à comunidade, como assistência social, medicina, educação e organizações não governamentais.",
        relacionamentos:
          "Buscam conexões profundas e significativas, valorizando a empatia e o suporte mútuo.",
        desenvolvimento_pessoal:
          "É importante que aprendam a estabelecer limites saudáveis, garantindo que suas próprias necessidades sejam atendidas enquanto ajudam os outros.",
      },
    },
  ];

  return {
    numero: resultadoFinal,
    significado: significados[resultadoFinal - 1],
  };
}

function reduzirNumero(num: number): number {
  while (num > 9) {
    num = String(num)
      .split("")
      .reduce((a, b) => a + Number(b), 0); // Converta 'b' explicitamente para número
  }

  return num;
}
