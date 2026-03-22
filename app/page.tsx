"use client";

import { chapterData } from "./data/chapters";
import { useState } from "react";

type ChapterKey = keyof typeof chapterData;
type ViewMode = "home" | "episodes" | "characters" | "faces";

const characterCards = [
  {
    name: "Paola",
    role: "Protagonista",
    desc: "Paola é intensidade pura disfarçada de silêncio. Observadora, profunda e emocionalmente complexa, ela sente tudo em níveis que ninguém ao redor parece alcançar. Carrega dentro de si conflitos que nem ela mesma entende completamente — desejo, medo, culpa e curiosidade se misturam. Sua vida muda ao cruzar limites que nunca achou que cruzaria, principalmente quando Andressa entra no seu mundo.",
  },
  {
    name: "Andressa",
    role: "Professora / protagonista",
    desc: "Andressa, 36 anos, é uma mulher de presença marcante, segura e controlada — pelo menos por fora. Inteligente, firme e naturalmente dominante, ela está acostumada a ter o controle de tudo… até Paola aparecer. Por trás da postura profissional existe um turbilhão de desejos reprimidos e decisões perigosas.",
  },
  {
    name: "Marta",
    role: "Amiga",
    desc: "Marta é intensidade emocional em forma de pessoa. Expressiva, leal e impulsiva, ela sente tudo com o coração na mão. Está em um relacionamento com Vanessa, mas vive em constante medo de perder quem ama. É o tipo de amiga que grita, briga, chora — mas nunca abandona.",
  },
  {
    name: "Vanessa",
    role: "Amiga",
    desc: "Vanessa é mais centrada, mas não menos intensa. Equilibrada e protetora, ela tenta manter tudo sob controle, principalmente quando Marta explode. Seu amor é firme, silencioso e profundo, mas suas inseguranças aparecem quando sente que algo pode fugir do seu alcance.",
  },
  {
    name: "Yasmin",
    role: "Amiga",
    desc: "Yasmin é leve na superfície, mas cheia de camadas por dentro. Carismática, brincalhona e aparentemente despreocupada, ela usa o humor como forma de esconder suas próprias dúvidas e conflitos. Seu relacionamento com Igor é estável… mas nem sempre simples.",
  },
  {
    name: "Igor e Roberto",
    role: "Amigos",
    desc: "Trazem humor, movimento e respiro em meio ao caos emocional.",
  },
  {
    name: "Dona Priscila",
    role: "Figura materna",
    desc: "Acolhedora, intuitiva e cheia de calor humano. Sua presença é abrigo em meio ao caos.",
  },
  {
    name: "Ricardo",
    role: "Ameaça",
    desc: "Observador, invejoso e perigoso. Onde deveria haver ética, ele enxerga oportunidade.",
  },
];

export default function Home() {
  const [selectedChapter, setSelectedChapter] =
    useState<ChapterKey>("chapter1");
  const [view, setView] = useState<ViewMode>("home");
  const [openMenu, setOpenMenu] = useState(false);

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

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setView("home");
                setOpenMenu(false);
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
              }}
              className="rounded-full border border-zinc-700 bg-zinc-900/70 px-5 py-2 text-sm transition hover:border-red-700 hover:bg-zinc-800"
            >
              Episódios
            </button>

            <button
              onClick={() => {
                setView("faces");
                setOpenMenu(false);
              }}
              className="rounded-full border border-zinc-700 bg-zinc-900/70 px-5 py-2 text-sm transition hover:border-red-700 hover:bg-zinc-800"
            >
              Rostos
            </button>

            {view === "episodes" && openMenu && (
              <div className="absolute right-6 top-20 z-50 max-h-96 w-72 overflow-y-auto rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl">
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
                    setView("faces");
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
                    Entre na galeria visual dos personagens e explore a estética
                    de cada presença.
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
                    abrigo. Outras, perigo.
                  </p>
                </div>

                <button
                  onClick={() => setView("home")}
                  className="rounded-2xl border border-zinc-700 bg-zinc-900/70 px-5 py-3 text-sm transition hover:border-red-700 hover:bg-zinc-800"
                >
                  Voltar
                </button>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {characterCards.map((item) => {
                  const isMain =
                    item.name === "Paola" || item.name === "Andressa";

                  return (
                    <div
                      key={item.name}
                      className={
                        isMain
                          ? "group relative overflow-hidden rounded-[1.8rem] border border-red-700/70 bg-red-950/30 p-6 shadow-lg shadow-red-900/20 transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-red-700 hover:bg-red-950/40"
                          : "group relative overflow-hidden rounded-[1.8rem] border border-zinc-800 bg-black/40 p-6 transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-red-900/60 hover:bg-zinc-900/80"
                      }
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-red-800/30 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                      <p className="relative z-10 text-xs uppercase tracking-[0.28em] text-red-500">
                        {item.role}
                      </p>

                      <h3 className="relative z-10 mt-3 text-3xl font-semibold tracking-wide text-zinc-100">
                        {item.name}
                      </h3>

                      <div className="relative z-10 mt-4 h-px w-full bg-gradient-to-r from-red-900/70 to-transparent" />

                      <p className="relative z-10 mt-5 leading-7 text-zinc-300">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        ) : view === "faces" ? (
          <section className="mx-auto max-w-6xl animate-fadeIn">
            <div className="rounded-[2rem] border border-zinc-800 bg-[radial-gradient(circle_at_top,rgba(120,0,0,0.18),transparent_45%),rgba(10,10,10,0.95)] p-8 shadow-2xl shadow-black/50 md:p-10">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-red-500">
                    galeria visual
                  </p>
                  <h2 className="mt-2 text-5xl font-bold tracking-wide">
                    Rostos dos personagens
                  </h2>
                  <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
                    Aqui vai entrar a estética visual de cada personagem.
                  </p>
                </div>

                <button
                  onClick={() => setView("home")}
                  className="rounded-2xl border border-zinc-700 bg-zinc-900/70 px-5 py-3 text-sm transition hover:border-red-700 hover:bg-zinc-800"
                >
                  Voltar
                </button>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {["Paola", "Andressa", "Marta", "Vanessa", "Yasmin", "Igor"].map(
                  (name) => (
                    <div
                      key={name}
                      className="rounded-[1.8rem] border border-zinc-800 bg-black/40 p-7"
                    >
                      <div className="flex h-56 items-center justify-center rounded-[1.2rem] border border-zinc-800 bg-zinc-950 text-zinc-500">
                        imagem / referência
                      </div>

                      <h3 className="mt-5 text-2xl font-semibold text-zinc-100">
                        {name}
                      </h3>

                      <p className="mt-3 leading-7 text-zinc-400">
                        Espaço reservado para a aparência visual e referência
                        estética do personagem.
                      </p>
                    </div>
                  )
                )}
              </div>
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