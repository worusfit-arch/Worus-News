import { useState, useRef, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import corridaImg from "@/assets/corrida.jpg";
import jiujitsuImg from "@/assets/jiujitsu.jpg";
import ciclismoImg from "@/assets/ciclismo.jpg";
import musculacaoImg from "@/assets/musculacao.jpg";
import surfImg from "@/assets/surf.jpg";
import muaythaiImg from "@/assets/muaythai.jpg";
import futebolImg from "@/assets/futebol.jpg";
import voleiImg from "@/assets/volei.jpg";
import crossfitImg from "@/assets/crossfit.jpg";
import yogaImg from "@/assets/yoga.jpg";
import natacaoImg from "@/assets/natacao.jpg";
import pilatesImg from "@/assets/pilates.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

type Category = {
  label: string;
  emoji: string;
  badgeBg: string;
  badgeText: string;
};

const CATEGORIES: Record<string, Category> = {
  corrida: {
    label: "CORRIDA",
    emoji: "🏃",
    badgeBg: "bg-orange-100",
    badgeText: "text-orange-700",
  },
  academia: {
    label: "ACADEMIA",
    emoji: "🏋️",
    badgeBg: "bg-emerald-100",
    badgeText: "text-emerald-700",
  },
  calistenia: {
    label: "CALISTENIA",
    emoji: "🤸",
    badgeBg: "bg-amber-100",
    badgeText: "text-amber-700",
  },
  ciclismo: { label: "CICLISMO", emoji: "🚴", badgeBg: "bg-lime-100", badgeText: "text-lime-700" },
  crossfit: { label: "CROSSFIT", emoji: "🔥", badgeBg: "bg-teal-100", badgeText: "text-teal-700" },
  boxe: { label: "BOXE", emoji: "🥊", badgeBg: "bg-red-100", badgeText: "text-red-700" },
  futebol: { label: "FUTEBOL", emoji: "⚽", badgeBg: "bg-sky-100", badgeText: "text-sky-700" },
  beachtennis: {
    label: "BEACH TENNIS",
    emoji: "🏸",
    badgeBg: "bg-cyan-100",
    badgeText: "text-cyan-700",
  },
  surf: { label: "SURF", emoji: "🏄", badgeBg: "bg-blue-100", badgeText: "text-blue-700" },
  kitesurf: {
    label: "KITESURF",
    emoji: "🪁",
    badgeBg: "bg-indigo-100",
    badgeText: "text-indigo-700",
  },
  jiujitsu: { label: "JIU-JITSU", emoji: "🥋", badgeBg: "bg-rose-100", badgeText: "text-rose-700" },
  skate: { label: "SKATE", emoji: "🛹", badgeBg: "bg-violet-100", badgeText: "text-violet-700" },
  tenis: { label: "TÊNIS", emoji: "🎾", badgeBg: "bg-fuchsia-100", badgeText: "text-fuchsia-700" },
};

type NewsCard = {
  cat: keyof typeof CATEGORIES;
  image: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  content: string[];
};

const NEWS: NewsCard[] = [
  {
    cat: "corrida",
    image: corridaImg,
    title: "Maratona de SP: dicas de última hora para amadores.",
    excerpt: "Hidratação, ritmo e estratégia de prova para quem vai estrear nos 42km.",
    date: "22 MAI · 4 min",
    author: "Fernanda Ramos",
    content: [
      "Faltando poucos dias para a largada, a orientação de treinadores é simples: não tente compensar meses de preparação na última semana. O foco agora deve ser dormir bem, ajustar a alimentação e guardar energia para o dia da prova.",
      "A hidratação merece atenção redobrada nas 48 horas anteriores à corrida, com ingestão gradual de água e isotônicos, evitando excessos de uma só vez. Durante o percurso, o ideal é abastecer a cada posto, mesmo sem sede aparente.",
      "Para quem estreia nos 42km, o erro mais comum é sair rápido demais nos primeiros quilômetros. Especialistas recomendam manter um ritmo levemente abaixo do planejado até a metade da prova, guardando fôlego para os últimos 10km, quando o desgaste mental pesa mais que o físico.",
    ],
  },
  {
    cat: "academia",
    image: musculacaoImg,
    title: "Hipertrofia depois dos 40: o que a ciência realmente diz.",
    excerpt:
      "Novo estudo aponta que volume moderado supera cargas máximas para longevidade articular.",
    date: "21 MAI · 6 min",
    author: "Marcos Teixeira",
    content: [
      "Durante décadas, o treino de força foi associado quase exclusivamente a cargas máximas e poucas repetições. Um novo levantamento com praticantes acima dos 40 anos sugere que essa lógica precisa ser revista quando o objetivo é longevidade e saúde articular.",
      "Segundo o estudo, séries com volume moderado — entre 8 e 15 repetições, priorizando execução controlada — geraram ganhos de força e massa muscular comparáveis aos protocolos de carga máxima, com significativamente menos desgaste em joelhos e ombros.",
      "Os pesquisadores destacam que a recuperação entre sessões passa a ser o fator determinante depois dos 40, mais até do que a intensidade do estímulo. Dormir bem e respeitar o intervalo entre treinos do mesmo grupo muscular teria impacto maior nos resultados do que adicionar mais peso à barra.",
    ],
  },
  {
    cat: "jiujitsu",
    image: jiujitsuImg,
    title: "A ascensão dos campeonatos No-Gi no Brasil.",
    excerpt: "Por que a modalidade sem kimono está atraindo cada vez mais praticantes.",
    date: "20 MAI · 7 min",
    author: "Bruno Andrade",
    content: [
      "Sem as pegadas tradicionais do kimono, o No-Gi exige adaptações técnicas que vêm atraindo tanto veteranos quanto iniciantes em busca de um jiu-jitsu mais dinâmico e próximo do MMA.",
      "Academias relatam aumento expressivo na procura por aulas específicas da modalidade nos últimos dois anos, impulsionado também pela popularização de eventos que pagam premiações relevantes para atletas amadores.",
      "Para quem vem do jiu-jitsu tradicional, o principal ajuste está na pegada e no controle de posição, já que grande parte dos agarres depende agora de força e base corporal, e não mais do tecido do kimono.",
    ],
  },
  {
    cat: "surf",
    image: surfImg,
    title: "Swell histórico agita a costa nordestina em maio.",
    excerpt: "Previsão aponta ondas de até 3 metros em Fernando de Noronha nesta semana.",
    date: "20 MAI · 3 min",
    author: "Juliana Costa",
    content: [
      "Modelos meteorológicos indicam a chegada de um swell fora do padrão para a época, com ondulações vindas do Atlântico Sul que devem elevar consideravelmente a altura das ondas na costa nordestina.",
      "Em Fernando de Noronha, picos que normalmente não passam de 1,5 metro devem registrar ondas de até 3 metros, atraindo surfistas experientes de diferentes estados para a janela de swell.",
      "Guias locais reforçam a orientação para surfistas menos experientes: nos dias de pico da ondulação, correntes de retorno ficam mais fortes, e a recomendação é surfar acompanhado e respeitar o próprio nível técnico.",
    ],
  },
  {
    cat: "ciclismo",
    image: ciclismoImg,
    title: "Ciclismo urbano: segurança e performance no dia a dia.",
    excerpt: "Equipamentos essenciais para quem trocou o carro pela bike.",
    date: "19 MAI · 5 min",
    author: "Pedro Lucena",
    content: [
      "O aumento no número de ciclistas urbanos nos últimos anos trouxe também mais atenção para os equipamentos de segurança básicos, que ainda são negligenciados por boa parte dos iniciantes.",
      "Capacete certificado, sinalização dianteira e traseira e um bom cadeado continuam sendo o trio essencial, mas especialistas também recomendam roupas com tecido refletivo para quem pedala em horários de pouca luz.",
      "Do lado da performance, pequenos ajustes de postura e altura do selim costumam gerar mais ganho de eficiência no pedal do dia a dia do que a troca de componentes caros na bicicleta.",
    ],
  },
  {
    cat: "boxe",
    image: muaythaiImg,
    title: "Boxe brasileiro conquista espaço no cenário mundial.",
    excerpt: "Novos nomes despontam nos rankings internacionais e mudam o mapa da luta.",
    date: "18 MAI · 4 min",
    author: "Diego Farias",
    content: [
      "Nos últimos rankings internacionais da modalidade, o número de boxeadores brasileiros entre os melhores do mundo cresceu de forma consistente, refletindo o investimento crescente em academias especializadas pelo país.",
      "Parte desse avanço é atribuída à troca de experiência com equipes de tradição olímpica, que passaram a receber atletas brasileiros em temporadas de imersão para aprimorar footwork e combinações de jab-direto.",
      "Federações locais já discutem a criação de um circuito nacional unificado, hoje fragmentado em campeonatos regionais, como forma de dar mais visibilidade e oportunidades aos novos talentos que vêm surgindo.",
    ],
  },
  {
    cat: "futebol",
    image: futebolImg,
    title: "Recuperação muscular: o que aprendemos com times da Série A.",
    excerpt: "Como crioterapia e sono estruturado viraram parte da rotina dos jogadores.",
    date: "18 MAI · 5 min",
    author: "Camila Duarte",
    content: [
      "Departamentos de performance de clubes da Série A vêm tratando a recuperação muscular com o mesmo rigor dado aos treinos técnicos e táticos, especialmente em calendários com jogos a cada três dias.",
      "A crioterapia, antes usada apenas em lesões pontuais, hoje faz parte da rotina semanal de boa parte dos elencos, associada a protocolos de compressão e alongamento guiado logo após as partidas.",
      "O item que mais ganhou peso nos últimos anos, porém, foi o sono: clubes passaram a monitorar horas e qualidade do descanso dos atletas, entendendo que a recuperação muscular real acontece, em grande parte, enquanto o jogador dorme.",
    ],
  },
  {
    cat: "beachtennis",
    image: voleiImg,
    title: "Beach tennis: a modalidade que mais cresce nas areias do Brasil.",
    excerpt: "Dupla campeã de torneios nacionais aposta em nova rotina de treinos físicos.",
    date: "17 MAI · 4 min",
    author: "Rafael Nogueira",
    content: [
      "O circuito nacional de beach tennis segue em expansão acelerada, puxado pela chegada de novas quadras de areia em clubes e centros esportivos de todo o país.",
      "Entre as atrações da nova temporada está uma dupla campeã de torneios nacionais, que decidiu reformular a preparação física para dar mais consistência aos jogos de duplas em ritmo alto.",
      "Comissões técnicas apostam que o crescimento do número de praticantes deve elevar o nível competitivo do circuito nos próximos anos, com mais investimento em categorias de base.",
    ],
  },
  {
    cat: "calistenia",
    image: yogaImg,
    title: "Calistenia ao ar livre: como montar um treino completo sem equipamento.",
    excerpt: "Parques e praças se transformam em academias para quem treina com o peso do corpo.",
    date: "16 MAI · 5 min",
    author: "Lucas Ferreira",
    content: [
      "A calistenia vem ganhando adeptos entre praticantes que buscam um treino funcional sem depender de academia, usando apenas o peso do próprio corpo e estruturas públicas como barras e bancos de praça.",
      "Treinadores especializados recomendam que iniciantes comecem com variações facilitadas de movimentos clássicos como flexão, agachamento e barra fixa, progredindo em dificuldade apenas quando a execução estiver dominada.",
      "O maior diferencial apontado por quem migrou do treino convencional para a calistenia é o ganho de consciência corporal e mobilidade articular, benefícios que se refletem diretamente na qualidade dos movimentos do dia a dia.",
    ],
  },
  {
    cat: "crossfit",
    image: crossfitImg,
    title: "CrossFit Games 2024: o que esperar da seletiva sul-americana.",
    excerpt: "Atletas brasileiros se preparam para a competição mais disputada do ano.",
    date: "16 MAI · 6 min",
    author: "Ricardo Silva",
    content: [
      "A seletiva sul-americana do CrossFit Games deste ano promete ser a mais disputada desde que a região ganhou vagas diretas para a fase final, com um número recorde de atletas classificados.",
      "Equipes brasileiras vêm apostando em periodização mais longa e específica, com foco nos movimentos que historicamente aparecem nas provas surpresa da competição, como rope climb e handstand walk.",
      "Analistas do esporte apontam que o nível técnico dos competidores sul-americanos subiu consideravelmente nos últimos ciclos, com chances reais de pódio na fase mundial pela primeira vez.",
    ],
  },
  {
    cat: "kitesurf",
    image: natacaoImg,
    title: "Kitesurf no Ceará: por que o estado é referência mundial.",
    excerpt: "Ventos constantes e praias extensas fazem do litoral cearense o destino favorito.",
    date: "15 MAI · 4 min",
    author: "Marina Souza",
    content: [
      "O litoral do Ceará reúne condições naturais consideradas ideais para a prática do kitesurf: ventos constantes acima de 15 nós durante a maior parte do ano, águas rasas e praias com extensão suficiente para manobras de longa distância.",
      "Praias como Cumbuco e Jericoacoara já figuraram em rankings internacionais entre os melhores spots do mundo, atraindo praticantes de dezenas de países durante a alta temporada de ventos.",
      "Escolas locais relatam crescimento ano a ano no número de alunos iniciantes, muitos deles turistas que experimentam o esporte pela primeira vez e acabam retornando em temporadas seguintes para avançar no nível técnico.",
    ],
  },
  {
    cat: "skate",
    image: pilatesImg,
    title: "Skate park de São Paulo recebe evento internacional inédito.",
    excerpt: "Circuito reúne skatistas de 12 países e coloca o Brasil no mapa do street mundial.",
    date: "15 MAI · 3 min",
    author: "Thiago Ramos",
    content: [
      "A capital paulista recebe pela primeira vez uma etapa de um circuito internacional de street skate, reunindo atletas de 12 países em uma pista projetada especificamente para o evento.",
      "A competição marca um momento importante para o skate brasileiro, que desde a inclusão da modalidade nos Jogos Olímpicos vem recebendo mais investimento em infraestrutura e formação de atletas.",
      "Organizadores destacam que o evento terá transmissão ao vivo e uma programação paralela voltada para a comunidade local, com oficinas de iniciação ao skate para crianças e adolescentes.",
    ],
  },
  {
    cat: "tenis",
    image: corridaImg,
    title: "Tênis amador: como evitar a lesão mais comum entre iniciantes.",
    excerpt: "Cotovelo de tenista atinge 40% dos praticantes que não ajustam a empunhadura.",
    date: "14 MAI · 5 min",
    author: "Ana Paula Vieira",
    content: [
      "A epicondilite lateral, popularmente conhecida como cotovelo de tenista, é a lesão mais frequente entre praticantes amadores da modalidade, atingindo cerca de 40% dos que jogam mais de duas vezes por semana.",
      "Fisioterapeutas especializados apontam que a principal causa não é o excesso de jogo, mas sim o uso de empunhadura inadequada combinada com raquetes pesadas demais para o nível do praticante.",
      "A prevenção passa por três ajustes simples: escolher uma raquete com peso e grip compatíveis com o biotipo, fazer alongamentos específicos de antebraço antes e depois do jogo, e fortalecer a musculatura extensora do punho com exercícios de baixa carga.",
    ],
  },
];

function Index() {
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function toggleArticle(title: string) {
    setExpandedArticle((prev) => (prev === title ? null : title));
  }

  function handleCategoryClick(key: string | null) {
    setActiveCategory(key);
    setMenuOpen(false);
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Brand strip */}
      <div className="h-1 bg-gradient-to-r from-brand via-brand-dark to-brand" />

      {/* Header */}
      <header className="border-b border-slate-100 sticky top-0 bg-white/95 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2" ref={menuRef}>
              <button
                type="button"
                onClick={() => setMenuOpen((prev) => !prev)}
                className="size-9 bg-brand rounded-lg flex items-center justify-center hover:bg-brand-dark transition-colors relative"
                aria-label="Menu de categorias"
              >
                <div
                  className={`size-3.5 bg-white rounded-full transition-transform ${menuOpen ? "scale-75" : ""}`}
                />
              </button>
              <a href="#top">
                <h1 className="text-2xl font-serif font-extrabold tracking-tight">
                  <span className="text-slate-900">WORUS</span>{" "}
                  <span className="text-brand-dark">NEWS</span>
                </h1>
              </a>

              {/* Dropdown menu */}
              {menuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl shadow-black/5 z-50">
                  <div className="max-w-6xl mx-auto px-4 py-5">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                        Categorias
                      </p>
                      <a
                        href="#feed"
                        onClick={() => handleCategoryClick(null)}
                        className="text-xs font-bold text-brand hover:text-brand-dark transition-colors"
                      >
                        Ver todas →
                      </a>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2">
                      {Object.entries(CATEGORIES).map(([key, c]) => (
                        <a
                          key={key}
                          href={`#cat-${key}`}
                          onClick={() => handleCategoryClick(key)}
                          className={`flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl text-center transition-all ${
                            activeCategory === key
                              ? "bg-brand text-white shadow-md shadow-brand/20"
                              : "bg-slate-50 text-slate-600 hover:bg-brand/10 hover:text-brand-dark"
                          }`}
                        >
                          <span className="text-2xl">{c.emoji}</span>
                          <span className="text-[10px] font-bold uppercase tracking-wider leading-tight">
                            {c.label}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">Edição de 24 de Maio, 2024</p>
              <p className="text-xs text-slate-400">Atualizado há 2 horas</p>
            </div>
          </div>
          <p className="text-[11px] text-slate-500 mt-1 uppercase tracking-[0.18em]">
            As principais notícias de saúde e esporte, toda semana.
          </p>
        </div>
      </header>

      <main id="top" className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero */}
        <section className="mb-14">
          <article className="group cursor-pointer">
            <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden mb-6 ring-1 ring-black/5">
              <img
                src={heroImg}
                alt="Atleta treinando em academia de alta performance"
                width={1600}
                height={900}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
            <div className="max-w-3xl">
              <span
                className={`inline-block px-3 py-1 ${CATEGORIES.crossfit.badgeBg} ${CATEGORIES.crossfit.badgeText} text-[11px] font-bold rounded-full mb-4 tracking-wider`}
              >
                {CATEGORIES.crossfit.label}
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-extrabold leading-[1.05] mb-4 group-hover:text-brand transition-colors">
                A revolução do treino híbrido: como unir força e endurance no seu dia a dia.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Novos estudos apontam que a combinação de levantamento de peso e corrida intervalada
                pode acelerar o metabolismo em até 40% mais que treinos isolados.
              </p>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <span>Por Ricardo Silva</span>
                <span>•</span>
                <span>8 min de leitura</span>
                <span>•</span>
                <span>24 MAI 2024</span>
              </div>
            </div>
          </article>
        </section>

        {/* Ad banner */}
        <div className="mb-14 p-1 bg-gradient-to-r from-brand/10 via-brand/5 to-brand/10 rounded-2xl">
          <div className="bg-white rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 relative">
            <span className="absolute top-2 right-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">
              Publicidade
            </span>
            <div className="flex items-center gap-4">
              <div className="size-12 bg-brand/10 rounded-full flex items-center justify-center font-serif font-extrabold text-brand">
                W
              </div>
              <div>
                <h4 className="font-bold text-slate-800 uppercase tracking-tight">
                  Worus Fit — Desafios Esportivos
                </h4>
                <p className="text-sm text-slate-500">
                  Treine, desafie amigos e ganhe coins em 13 modalidades.
                </p>
              </div>
            </div>
            <button
              type="button"
              className="px-6 py-2 bg-brand text-white text-sm font-bold rounded-full hover:bg-brand-dark transition-colors"
            >
              Saiba Mais
            </button>
          </div>
        </div>

        {/* Feed */}
        <section id="feed" className="mb-8 flex items-baseline justify-between scroll-mt-32">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            Edição da semana
          </h3>
          <span className="text-xs text-brand font-semibold">{NEWS.length} matérias</span>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEWS.map((n, i) => (
            <div key={n.title} className={i === 0 ? "md:col-span-2 lg:col-span-2" : ""}>
              <NewsArticle
                news={n}
                isExpanded={expandedArticle === n.title}
                onToggle={() => toggleArticle(n.title)}
                featured={i === 0}
              />
            </div>
          ))}

          {/* Sponsored card */}
          <article className="p-6 bg-brand/5 rounded-2xl flex flex-col justify-between border border-brand/20 relative min-h-[320px]">
            <span className="absolute top-3 right-4 text-[9px] font-bold text-brand uppercase tracking-widest">
              Patrocinado
            </span>
            <div>
              <span className="inline-block px-3 py-1 bg-brand/10 text-brand-dark text-[10px] font-bold rounded-full mb-4 tracking-wider">
                WORUS FIT
              </span>
              <h3 className="text-xl font-bold font-serif leading-snug text-slate-900 mb-3">
                Desafie seus amigos e ganhe coins treinando.
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                Crie desafios em 13 modalidades, acompanhe rankings e evolua junto com a comunidade.
              </p>
            </div>
            <button
              type="button"
              className="w-full py-3 bg-brand hover:bg-brand-dark transition-colors text-white font-bold rounded-full text-sm uppercase tracking-widest"
            >
              Baixar agora
            </button>
          </article>
        </section>

        {/* Signup */}
        <section className="mt-20 py-14 px-6 bg-slate-900 rounded-3xl text-center text-white relative overflow-hidden">
          <div className="absolute -top-24 -right-24 size-64 rounded-full bg-brand/20 blur-3xl pointer-events-none" />
          <div className="max-w-xl mx-auto relative">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand mb-4">
              Newsletter semanal
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 leading-tight">
              Receba o melhor do esporte no seu e-mail.
            </h2>
            <p className="text-slate-400 mb-8">
              Junte-se a mais de 50.000 leitores e não perca nenhuma atualização importante sobre
              saúde e performance.
            </p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-5 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-brand transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-brand hover:bg-brand-dark text-white font-bold rounded-full transition-colors shadow-lg shadow-brand/20"
              >
                INSCREVER
              </button>
            </form>
            <p className="text-[10px] text-slate-500 mt-4 uppercase tracking-widest">
              Respeitamos sua privacidade. Cancele a qualquer momento.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 mt-20 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="size-6 bg-brand rounded flex items-center justify-center">
                  <div className="size-2.5 bg-white rounded-full" />
                </div>
                <span className="text-xl font-serif font-extrabold tracking-tight">
                  <span className="text-slate-900">WORUS</span>{" "}
                  <span className="text-brand-dark">NEWS</span>
                </span>
              </div>
              <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
                Curadoria semanal das notícias mais relevantes para quem vive o esporte em todas as
                suas formas.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm">Categorias</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="hover:text-brand cursor-pointer">Corrida</li>
                <li className="hover:text-brand cursor-pointer">Academia</li>
                <li className="hover:text-brand cursor-pointer">Surf</li>
                <li className="hover:text-brand cursor-pointer">Jiu-Jitsu</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm">Links</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="hover:text-brand cursor-pointer">Sobre</li>
                <li className="hover:text-brand cursor-pointer">Contato</li>
                <li className="hover:text-brand cursor-pointer">Privacidade</li>
                <li className="hover:text-brand cursor-pointer">Anunciar</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-400">
              © 2024 Worus News Newsletter. Todos os direitos reservados.
            </p>
            <div className="flex gap-3">
              {["IG", "X", "YT"].map((s) => (
                <span
                  key={s}
                  className="size-8 grid place-items-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-500 hover:bg-brand hover:text-white transition-colors cursor-pointer"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NewsArticle({
  news,
  isExpanded,
  onToggle,
  featured = false,
}: {
  news: NewsCard;
  isExpanded: boolean;
  onToggle: () => void;
  featured?: boolean;
}) {
  const cat = CATEGORIES[news.cat];

  if (isExpanded) {
    return (
      <article
        id={`cat-${news.cat}`}
        className="bg-white rounded-2xl ring-2 ring-brand/30 overflow-hidden scroll-mt-32 shadow-xl shadow-brand/10"
      >
        <div className="w-full aspect-[21/9] overflow-hidden">
          <img
            src={news.image}
            alt={news.title}
            width={1600}
            height={900}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="border-l-4 border-brand p-6 md:p-10 max-w-3xl mx-auto">
          <span
            className={`inline-block px-3 py-1 ${cat.badgeBg} ${cat.badgeText} text-[10px] font-bold rounded-full mb-4 tracking-wider`}
          >
            {cat.label}
          </span>
          <h3 className="text-3xl md:text-4xl font-serif font-extrabold leading-tight mb-4">
            {news.title}
          </h3>
          <div className="flex items-center gap-3 text-sm text-slate-400 mb-8">
            <span>Por {news.author}</span>
            <span>•</span>
            <span>{news.date}</span>
          </div>
          <div className="space-y-4 text-slate-700 leading-relaxed text-[15px]">
            {news.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <button
            type="button"
            onClick={onToggle}
            className="mt-10 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-brand border border-brand/30 rounded-full hover:bg-brand hover:text-white transition-colors"
          >
            ← Fechar matéria
          </button>
        </div>
      </article>
    );
  }

  if (featured) {
    return (
      <article
        id={`cat-${news.cat}`}
        className="group cursor-pointer scroll-mt-32 bg-slate-50 rounded-2xl overflow-hidden ring-1 ring-slate-100 hover:ring-brand/30 transition-all hover:shadow-lg hover:shadow-brand/5"
        role="button"
        tabIndex={0}
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
          }
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="w-full aspect-[4/3] md:aspect-auto overflow-hidden">
            <img
              src={news.image}
              alt={news.title}
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center border-l-4 border-brand">
            <span
              className={`inline-block w-fit px-3 py-1 ${cat.badgeBg} ${cat.badgeText} text-[10px] font-bold rounded-full mb-3 tracking-wider`}
            >
              {cat.label}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold font-serif leading-snug group-hover:text-brand transition-colors mb-3">
              {news.title}
            </h3>
            <p className="text-sm text-slate-500 mb-4 leading-relaxed">{news.excerpt}</p>
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-slate-400 font-semibold">
              <span>{news.date}</span>
              <span>•</span>
              <span className="text-brand font-bold">Ler matéria →</span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      id={`cat-${news.cat}`}
      className="group cursor-pointer scroll-mt-32 bg-slate-50 rounded-2xl overflow-hidden ring-1 ring-slate-100 hover:ring-brand/30 transition-all hover:shadow-lg hover:shadow-brand/5"
      role="button"
      tabIndex={0}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
    >
      <div className="w-full aspect-[4/3] overflow-hidden">
        <img
          src={news.image}
          alt={news.title}
          loading="lazy"
          width={800}
          height={600}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-5 border-l-4 border-brand">
        <span
          className={`inline-block px-3 py-1 ${cat.badgeBg} ${cat.badgeText} text-[10px] font-bold rounded-full mb-2 tracking-wider`}
        >
          {cat.label}
        </span>
        <h3 className="text-lg font-bold font-serif leading-snug group-hover:text-brand transition-colors mb-2">
          {news.title}
        </h3>
        <p className="text-sm text-slate-500 line-clamp-2 mb-3">{news.excerpt}</p>
        <div className="flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold">
            {news.date}
          </p>
          <span className="text-[11px] font-bold text-brand uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
            Ler →
          </span>
        </div>
      </div>
    </article>
  );
}
