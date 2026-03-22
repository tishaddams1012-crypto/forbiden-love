"use client";

import { chapterData } from "./data/chapters";
import { useState } from "react";

type ChapterKey = keyof typeof chapterData;
type ViewMode = "home" | "episodes" | "characters";

type Character = {
  id: string;
  name: string;
  role: string;
  age?: string;
  desc: string;
  detail: string;
  x: string;
  y: string;
  main?: boolean;
};

const spriteImage = "/elenco.png";
const characters: Character[] = [
  {
    id: "paola",
    name: "Paola",
    role: "Protagonista",
    age: "18",
    desc: "Intensa, observadora e impossível de sentir pela metade.",
    detail:
      "Paola é intensidade pura disfarçada de silêncio. Observadora, profunda e emocionalmente complexa, sente tudo em níveis que ninguém ao redor parece alcançar. Carrega dentro de si desejo, medo, culpa e curiosidade misturados. Sua vida muda ao cruzar limites que nunca achou que cruzaria, principalmente quando Andressa entra no seu mundo.",
    x: "0%",
    y: "0%",
    main: true,
  },
  {
    id: "andressa",
    name: "Andressa",
    role: "Professora / protagonista",
    age: "36",
    desc: "Elegante, controlada e perigosa até no silêncio.",
    detail:
      "Andressa, 36 anos, é uma mulher de presença marcante, segura e controlada — pelo menos por fora. Inteligente, firme e naturalmente dominante, está acostumada a manter tudo sob controle… até Paola aparecer. Por trás da postura profissional existe um turbilhão de desejos reprimidos e decisões perigosas.",
    x: "33.33%",
    y: "0%",
    main: true,
  },
  {
    id: "marta",
    name: "Marta",
    role: "Amiga",
    age: "18",
    desc: "Explosiva, leal e emocional até o último fio.",
    detail:
      "Marta é intensidade emocional em forma de pessoa. Expressiva, leal e impulsiva, sente tudo com o coração na mão. Vive relações e amizades no extremo e é do tipo que grita, briga, chora — mas nunca abandona quem ama.",
    x: "66.66%",
    y: "0%",
  },
  {
    id: "priscila",
    name: "Dona Priscila",
    role: "Figura materna",
    desc: "Acolhimento, força e olhar de quem entende mais do que diz.",
    detail:
      "Dona Priscila é abrigo, presença e intuição. De cabelos brancos e postura firme, transmite acolhimento sem perder autoridade. Sua casa é refúgio, mas seu olhar percebe tensões que muita gente tenta esconder.",
    x: "100%",
    y: "0%",
  },
  {
    id: "vanessa",
    name: "Vanessa",
    role: "Amiga",
    age: "18",
    desc: "Centrada, protetora e mais intensa do que deixa transparecer.",
    detail:
      "Vanessa é mais centrada, mas não menos intensa. Equilibrada e protetora, tenta manter tudo sob controle, principalmente quando o caos ao redor ameaça explodir. Seu amor é firme, silencioso e profundo.",
    x: "0%",
    y: "100%",
  },
  {
    id: "yasmin",
    name: "Yasmin",
    role: "Amiga",
    age: "18",
    desc: "Leve por fora, profunda por dentro.",
    detail:
      "Yasmin parece leve na superfície, mas é cheia de camadas. Carismática, brincalhona e aparentemente despreocupada, usa o humor para esconder dúvidas e conflitos. É uma presença luminosa em meio ao drama.",
    x: "33.33%",
    y: "100%",
  },
  {
    id: "igor",
    name: "Igor",
    role: "Amigo",
    desc: "Charme, humor e presença em meio ao caos.",
    detail:
      "Igor traz respiro, movimento e uma energia mais leve para a história. Seu jeito seguro e descontraído ajuda a equilibrar os momentos mais densos, mesmo quando o clima ao redor fica pesado.",
    x: "66.66%",
    y: "100%",
  },
  {
    id: "ricardo",
    name: "Ricardo",
    role: "Ameaça",
    desc: "Observador demais. Perigoso demais.",
    detail:
      "Ricardo é a ameaça silenciosa. Onde deveria haver ética, ele enxerga oportunidade. Observador, invejoso e calculista, transforma suspeitas em arma e tensão em risco real.",
    x: "100%",
    y: "100%",
  },
];

function CharacterPortrait({
  x,
  y,
  className = "",
}: {
  x: string;
  y: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[1.2rem] border border-zinc-800 bg-zinc-950 ${className}`}
      style={{
        backgroundImage: `url(${spriteImage})`,
        backgroundSize: "400% 200%",
        backgroundPosition: `${x} ${y}`,
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}

export default function Home() {
  const [selectedChapter, setSelectedChapter] =
    useState<ChapterKey>("chapter1");
  const [view, setView] = useState<ViewMode>("home");
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );

  const currentChapter = chapterData[selectedChapter] ?? chapterData.chapter1;

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-red-500">
              fanfic series
            </p>
            <h1 className="mt-1 text-2xl font-semibold tracking-wide">
              Forbidden Love
            </h1>
          </div>

          <div className="relative flex items-center gap-3">
            <button
              onClick={() => {
                setView("home");
                setOpenMenu(false);
                setSelectedCharacter(null);
              }}
              className="rounded-full border border-zinc-700 bg-zinc-900/70 px-5 py-2 text-sm transition hover:border-red-700 hover:bg-zinc-800"
            >
              Início
            </button>

            <button
              onClick={() => {
                setView("characters");
                setOpenMenu(false);
              }}
              className="rounded-full border border-zinc-700 bg-zinc-900/70 px-5 py-2 text-sm transition hover:border-red-700 hover:bg-zinc-800"
            >
              Personagens
            </button>

            <button
              onClick={() => {
                setView("episodes");
                setOpenMenu((prev) => !prev);
                setSelectedCharacter(null);
              }}
              className="rounded-full border border-zinc-700 bg-zinc-900/70 px-5 py-2 text-sm transition hover:border-red-700 hover:bg-zinc-800"
            >
              Episódios
            </button>

            {view === "episodes" && openMenu && (
              <div className="absolute right-0 top-14 z-50 max-h-96 w-72 overflow-y-auto rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl">
                {(Object.keys(chapterData) as ChapterKey[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => {
                      setSelectedChapter(key);
                      setOpenMenu(false);
                      setView("episodes");
                    }}
                    className="block w-full border-b border-zinc-800 px-4 py-3 text-left text-sm transition last:border-b-0 hover:bg-zinc-900"
                  >
                    {chapterData[key].label} — {chapterData[key].title}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="px-6 py-10">
        {view === "home" ? (
          <section className="mx-auto max-w-6xl animate-fadeIn">
            <div className="rounded-[2rem] border border-red-950/70 bg-[radial-gradient(circle_at_top,rgba(120,0,0,0.24),transparent_40%),rgba(10,10,10,0.96)] px-8 py-16 shadow-2xl shadow-black/40 md:px-12 md:py-20">
              <div className="mx-auto max-w-4xl text-center">
                <p className="text-sm uppercase tracking-[0.35em] text-red-500">
                  fanfic series
                </p>

                <h1 className="mt-5 text-5xl font-bold tracking-wide md:text-7xl">
                  Forbidden Love
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">
                  Entre desejo, risco e silêncio, algumas histórias nascem para
                  incendiar tudo.
                </p>
              </div>

              <div className="mt-14 grid gap-6 md:grid-cols-3">
                <button
                  onClick={() => {
                    setView("episodes");
                    setOpenMenu(true);
                    setSelectedCharacter(null);
                  }}
                  className="group rounded-[1.8rem] border border-zinc-800 bg-black/40 p-7 text-left transition duration-300 hover:-translate-y-2 hover:border-red-800/70 hover:bg-zinc-900/80"
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-red-500">
                    entrar
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold text-zinc-100">
                    Episódios
                  </h3>
                  <p className="mt-4 leading-7 text-zinc-400">
                    Acesse os capítulos da história e acompanhe cada fase de
                    Paola e Andressa.
                  </p>
                </button>

                <button
                  onClick={() => {
                    setView("characters");
                    setOpenMenu(false);
                  }}
                  className="group rounded-[1.8rem] border border-zinc-800 bg-black/40 p-7 text-left transition duration-300 hover:-translate-y-2 hover:border-red-800/70 hover:bg-zinc-900/80"
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-red-500">
                    explorar
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold text-zinc-100">
                    Personagens
                  </h3>
                  <p className="mt-4 leading-7 text-zinc-400">
                    Veja quem são as peças centrais da história, seus vínculos,
                    tensões e riscos.
                  </p>
                </button>

                <button
                  onClick={() => {
                    setView("characters");
                    setSelectedCharacter(characters[0]);
                    setOpenMenu(false);
                  }}
                  className="group rounded-[1.8rem] border border-zinc-800 bg-black/40 p-7 text-left transition duration-300 hover:-translate-y-2 hover:border-red-800/70 hover:bg-zinc-900/80"
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-red-500">
                    visualizar
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold text-zinc-100">
                    Rostos
                  </h3>
                  <p className="mt-4 leading-7 text-zinc-400">
                    Explore a galeria visual e abra a ficha individual de cada
                    personagem.
                  </p>
                </button>
              </div>
            </div>
          </section>
        ) : view === "characters" ? (
          <section className="mx-auto max-w-6xl animate-fadeIn">
            <div className="rounded-[2rem] border border-zinc-800 bg-[radial-gradient(circle_at_top,rgba(120,0,0,0.18),transparent_45%),rgba(10,10,10,0.95)] p-8 shadow-2xl shadow-black/50 md:p-10">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-red-500">
                    arquivo emocional
                  </p>

                  <h2 className="mt-2 text-5xl font-bold tracking-wide">
                    Personagens
                  </h2>

                  <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
                    Cada pessoa aqui carrega um pedaço do incêndio. Algumas são
                    abrigo. Outras, perigo. Clique em um card para abrir a ficha
                    completa.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setView("home");
                    setSelectedCharacter(null);
                  }}
                  className="rounded-2xl border border-zinc-700 bg-zinc-900/70 px-5 py-3 text-sm transition hover:border-red-700 hover:bg-zinc-800"
                >
                  Voltar
                </button>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {characters.map((item) => {
                  const isMain = item.main;

                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedCharacter(item)}
                      className={
                        isMain
                          ? "group overflow-hidden rounded-[1.8rem] border border-red-700/70 bg-red-950/20 text-left shadow-lg shadow-red-900/20 transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-red-700 hover:bg-red-950/30"
                          : "group overflow-hidden rounded-[1.8rem] border border-zinc-800 bg-black/40 text-left transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-red-900/60 hover:bg-zinc-900/80"
                      }
                    >
                      <div className="relative">
                        <CharacterPortrait
                          x={item.x}
                          y={item.y}
                          className="h-72 w-full transition duration-500 group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-4">
                          <p className="text-[11px] uppercase tracking-[0.28em] text-red-400">
                            {item.role}
                          </p>
                          <h3 className="mt-2 text-2xl font-semibold text-zinc-100">
                            {item.name}
                          </h3>
                          {item.age && (
                            <p className="mt-1 text-sm text-zinc-300">
                              {item.age} anos
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="p-5">
                        <p className="leading-7 text-zinc-300">{item.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {selectedCharacter && (
                <div className="mt-10 rounded-[2rem] border border-red-900/40 bg-black/50 p-6 shadow-xl shadow-black/30 md:p-8">
                  <div className="grid gap-6 md:grid-cols-[320px_1fr]">
                    <CharacterPortrait
                      x={selectedCharacter.x}
                      y={selectedCharacter.y}
                      className="h-[420px] w-full"
                    />

                    <div>
                      <p className="text-sm uppercase tracking-[0.35em] text-red-500">
                        ficha individual
                      </p>

                      <h3 className="mt-3 text-4xl font-bold text-zinc-100">
                        {selectedCharacter.name}
                      </h3>

                      <p className="mt-3 text-lg text-zinc-300">
                        {selectedCharacter.role}
                        {selectedCharacter.age
                          ? ` • ${selectedCharacter.age} anos`
                          : ""}
                      </p>

                      <div className="mt-5 h-px w-full bg-gradient-to-r from-red-900/70 to-transparent" />

                      <p className="mt-6 leading-8 text-zinc-300">
                        {selectedCharacter.detail}
                      </p>

                      <div className="mt-8">
                        <button
                          onClick={() => setSelectedCharacter(null)}
                          className="rounded-2xl border border-zinc-700 bg-zinc-900/70 px-5 py-3 text-sm transition hover:border-red-700 hover:bg-zinc-800"
                        >
                          Fechar ficha
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        ) : (
          <>
            <section className="mx-auto max-w-6xl animate-fadeIn">
              <div className="rounded-[2rem] border border-red-950/70 bg-[radial-gradient(circle_at_top,rgba(120,0,0,0.24),transparent_40%),rgba(10,10,10,0.96)] px-8 py-16 shadow-2xl shadow-black/40">
                <div className="max-w-3xl">
                  <p className="text-sm uppercase tracking-[0.35em] text-red-500">
                    série interativa
                  </p>

                  <h2 className="mt-4 text-5xl font-bold leading-tight md:text-7xl">
                    Forbidden Love
                  </h2>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">
                    Entre corredores, silêncios, olhares demorados e desejos que
                    não deveriam existir, Paola e Andressa atravessam uma
                    história intensa, perigosa e impossível de esquecer.
                  </p>
                </div>
              </div>
            </section>

            <section className="mx-auto mt-10 max-w-4xl animate-fadeIn">
              <div className="rounded-[2rem] border border-red-950/60 bg-zinc-950/90 p-8 shadow-2xl shadow-black/40">
                <p className="text-sm uppercase tracking-[0.35em] text-red-500">
                  {currentChapter.label}
                </p>

                <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                  {currentChapter.title}
                </h2>

                <p className="mt-6 border-l-2 border-red-500 pl-4 text-lg italic text-red-300">
                  “{currentChapter.quote}”
                </p>
              </div>

              <div className="mt-8 rounded-[2rem] border border-zinc-800 bg-zinc-950/70 p-8 shadow-xl shadow-black/30">
                <p className="whitespace-pre-wrap text-[15px] leading-8 text-zinc-200 md:text-base md:leading-9">
                  {currentChapter?.text}
                </p>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}