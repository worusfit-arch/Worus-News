import { useState } from "react";
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

export const Route = createFileRoute("/")({
  component: Index,
});

type Category = {
  label: string;
  badgeBg: string;
  badgeText: string;
};

const CATEGORIES: Record<string, Category> = {
  corrida: { label: "CORRIDA", badgeBg: "bg-orange-100", badgeText: "text-orange-700" },
  academia: { label: "ACADEMIA", badgeBg: "bg-emerald-100", badgeText: "text-emerald-700" },
  calistenia: { label: "CALISTENIA", badgeBg: "bg-amber-100", badgeText: "text-amber-700" },
  ciclismo: { label: "CICLISMO", badgeBg: "bg-lime-100", badgeText: "text-lime-700" },
  crossfit: { label: "CROSSFIT", badgeBg: "bg-teal-100", badgeText: "text-teal-700" },
  boxe: { label: "BOXE", badgeBg: "bg-red-100", badgeText: "text-red-700" },
  futebol: { label: "FUTEBOL", badgeBg: "bg-sky-100", badgeText: "text-sky-700" },
  beachtennis: { label: "BEACH TENNIS", badgeBg: "bg-cyan-100", badgeText: "text-cyan-700" },
  surf: { label: "SURF", badgeBg: "bg-blue-100", badgeText: "text-blue-700" },
  kitesurf: { label: "KITESURF", badgeBg: "bg-indigo-100", badgeText: "text-indigo-700" },
  jiujitsu: { label: "JIU-JITSU", badgeBg: "bg-rose-100", badgeText: "text-rose-700" },
  skate: { label: "SKATE", badgeBg: "bg-violet-100", badgeText: "text-violet-700" },
  tenis: { label: "TÊNIS", badgeBg: "bg-fuchsia-100", badgeText: "text-fuchsia-700" },
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
];

function Index() {
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  function toggleArticle(title: string) {
    setExpandedArticle((prev) => (prev === title ? null : title));
  }

  function handleCategoryClick(key: string | null) {
    setActiveCategory(key);
  }

  /* Agrupa notícias por categoria, mantendo a ordem de aparição */
  const groupedNews: Record<string, NewsCard[]> = {};
  for (const n of NEWS) {
    if (!groupedNews[n.cat]) groupedNews[n.cat] = [];
    groupedNews[n.cat].push(n);
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-100 sticky top-0 bg-white/95 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <a href="#top" className="flex items-center gap-2">
                <div className="size-8 bg-brand rounded-lg flex items-center justify-center">
                  <div className="size-3.5 bg-white rounded-full" />
                </div>
                <h1 className="text-2xl font-serif font-extrabold tracking-tight">
                  <span className="text-slate-900">WORUS</span>{" "}
                  <span className="text-brand-dark">NEW</span>
                </h1>
              </a>
              <p className="text-[11px] text-slate-500 mt-1 uppercase tracking-[0.18em]">
                As principais notícias de saúde e esporte, toda semana.
              </p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-sm font-medium">Edição de 24 de Maio, 2024</p>
              <p className="text-xs text-slate-400">Atualizado há 2 horas</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 overflow-x-auto">
          <div className="max-w-6xl mx-auto px-4 py-3 flex gap-2 text-xs font-semibold uppercase tracking-wider whitespace-nowrap">
            <a
              href="#feed"
              onClick={() => handleCategoryClick(null)}
              className={`px-4 py-1.5 rounded-full transition-colors ${
                activeCategory === null
                  ? "bg-brand text-white"
                  : "bg-slate-100 text-slate-500 hover:bg-brand/10 hover:text-brand-dark"
              }`}
            >
              Tudo
            </a>
            {Object.entries(CATEGORIES).map(([key, c]) => (
              <a
                key={key}
                href={`#cat-${key}`}
                onClick={() => handleCategoryClick(key)}
                className={`px-4 py-1.5 rounded-full transition-colors ${
                  activeCategory === key
                    ? "bg-brand text-white"
                    : "bg-slate-100 text-slate-500 hover:bg-brand/10 hover:text-brand-dark"
                }`}
              >
                {c.label}
              </a>
            ))}
          </div>
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
        <div className="mb-14 p-1 bg-slate-50 rounded-xl">
          <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6 relative">
            <span className="absolute top-2 right-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">
              Publicidade
            </span>
            <div className="flex items-center gap-4">
              <div className="size-12 bg-white rounded flex items-center justify-center font-serif font-extrabold text-brand shadow-sm ring-1 ring-slate-100">
                F+
              </div>
              <div>
                <h4 className="font-bold text-slate-800 uppercase tracking-tight">
                  Proteína Pura Max
                </h4>
                <p className="text-sm text-slate-500">
                  O combustível que seu treino precisa para o próximo nível.
                </p>
              </div>
            </div>
            <button
              type="button"
              className="px-6 py-2 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-800 transition-colors"
            >
              Saiba Mais
            </button>
          </div>
        </div>

        {/* Feed */}
        <section id="feed" className="mb-6 flex items-baseline justify-between scroll-mt-32">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            Edição da semana
          </h3>
          <span className="text-xs text-slate-400">{NEWS.length} matérias</span>
        </section>

        {Object.entries(groupedNews).map(([catKey, articles], groupIndex) => {
          const cat = CATEGORIES[catKey];
          return (
            <section key={catKey} className="mb-12">
              {/* Section divider */}
              <div id={`cat-${catKey}`} className="scroll-mt-32 flex items-center gap-3 mb-6">
                <span
                  className={`inline-block px-3 py-1 ${cat.badgeBg} ${cat.badgeText} text-[11px] font-bold rounded-full tracking-wider`}
                >
                  {cat.label}
                </span>
                <div className="flex-1 h-px bg-slate-100" />
                <span className="text-[11px] text-slate-400">
                  {articles.length} {articles.length === 1 ? "matéria" : "matérias"}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((n) => (
                  <NewsArticle
                    key={n.title}
                    news={n}
                    isExpanded={expandedArticle === n.title}
                    onToggle={() => toggleArticle(n.title)}
                  />
                ))}
              </div>

              {/* Sponsored card after 2nd group */}
              {groupIndex === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  <article className="p-6 bg-brand/5 rounded-xl flex flex-col justify-between border border-brand/15 relative min-h-[320px]">
                    <span className="absolute top-3 right-4 text-[9px] font-bold text-brand uppercase tracking-widest">
                      Patrocinado
                    </span>
                    <div>
                      <span className="inline-block px-2 py-0.5 bg-white/70 text-brand-dark text-[10px] font-bold rounded mb-4 tracking-wider">
                        WORUS FIT
                      </span>
                      <h3 className="text-xl font-bold font-serif leading-snug text-slate-900 mb-3">
                        Desafie seus amigos e ganhe coins treinando.
                      </h3>
                      <p className="text-sm text-slate-600 mb-6">
                        Crie desafios em 13 modalidades, acompanhe rankings e evolua junto com a
                        comunidade.
                      </p>
                    </div>
                    <button
                      type="button"
                      className="w-full py-3 bg-brand hover:bg-brand-dark transition-colors text-white font-bold rounded-full text-sm uppercase tracking-widest"
                    >
                      Baixar agora
                    </button>
                  </article>
                </div>
              )}
            </section>
          );
        })}

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
                  <span className="text-brand-dark">NEW</span>
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
                <li className="hover:text-brand cursor-pointer">Musculação</li>
                <li className="hover:text-brand cursor-pointer">Ar Livre</li>
                <li className="hover:text-brand cursor-pointer">Lutas</li>
                <li className="hover:text-brand cursor-pointer">Bem-Estar</li>
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
              © 2024 Worus New Newsletter. Todos os direitos reservados.
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
}: {
  news: NewsCard;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const cat = CATEGORIES[news.cat];

  if (isExpanded) {
    return (
      <article
        id={`cat-${news.cat}`}
        className="col-span-full bg-white rounded-2xl ring-2 ring-brand/40 overflow-hidden scroll-mt-32 shadow-lg shadow-brand/5"
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
        <div className="p-6 md:p-10 max-w-3xl mx-auto">
          <span
            className={`inline-block px-2 py-0.5 ${cat.badgeBg} ${cat.badgeText} text-[10px] font-bold rounded mb-4 tracking-wider`}
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
          <div className="space-y-4 text-slate-700 leading-relaxed">
            {news.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <button
            type="button"
            onClick={onToggle}
            className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-dark transition-colors"
          >
            ← Fechar matéria
          </button>
        </div>
      </article>
    );
  }

  return (
    <article
      id={`cat-${news.cat}`}
      className="group cursor-pointer scroll-mt-32 rounded-xl transition-shadow hover:shadow-md hover:shadow-brand/5"
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
      <div className="w-full aspect-[4/3] rounded-xl mb-4 overflow-hidden ring-1 ring-black/5">
        <img
          src={news.image}
          alt={news.title}
          loading="lazy"
          width={800}
          height={600}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <span
        className={`inline-block px-2 py-0.5 ${cat.badgeBg} ${cat.badgeText} text-[10px] font-bold rounded mb-2 tracking-wider`}
      >
        {cat.label}
      </span>
      <h3 className="text-xl font-bold font-serif leading-snug group-hover:text-brand transition-colors mb-2">
        {news.title}
      </h3>
      <p className="text-sm text-slate-500 line-clamp-2 mb-2">{news.excerpt}</p>
      <p className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold">
        {news.date}
      </p>
    </article>
  );
}
