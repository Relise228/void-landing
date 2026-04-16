"use client";

import { useEffect, useState } from "react";

const IMG_BASE = "https://image.tmdb.org/t/p/w342";
const POSTER_COUNT = 24;

interface PosterItem {
  poster_path: string;
  title?: string;
  name?: string;
}

const FALLBACK: PosterItem[] = [
  { poster_path: "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg", title: "Dune: Part Two" },
  { poster_path: "/gKkl37BQuKTanygYQG1pyYgLVgf.jpg", title: "Blade Runner 2049" },
  { poster_path: "/pHkKbIRoCe7zIFvqan9LFSaQAde.jpg", title: "Severance" },
  { poster_path: "/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg", title: "Dark" },
  { poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", title: "Oppenheimer" },
  { poster_path: "/e6BDjRnKEDfUHB4OqMklzvNDqHR.jpg", title: "Succession" },
  { poster_path: "/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg", title: "Arcane" },
  { poster_path: "/AnsSKR9LuK0JU9XOHijKFOlYKgd.jpg", title: "Fallout" },
  { poster_path: "/7O4iVfOMQmdCSxhOg1WnzG1AgmT.jpg", title: "Shogun" },
  { poster_path: "/sY3lm4TJCApcBKgMBkmvICSOcIo.jpg", title: "The Bear" },
  { poster_path: "/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg", title: "Interstellar" },
  { poster_path: "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg", title: "Breaking Bad" },
  { poster_path: "/7WsyChQLEftFiDhRhUg9nHFjHxq.jpg", title: "Everything Everywhere" },
  { poster_path: "/qJ2tW6WMUDux911BytUNMuOozd0.jpg", title: "Fight Club" },
  { poster_path: "/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg", title: "Mr. Robot" },
  { poster_path: "/sv1xJUazXeYqAyy0a6StmdGrA2g.jpg", title: "Chernobyl" },
  { poster_path: "/rweIrveL43TaxUN0akQEaAXL6x0.jpg", title: "Gone Girl" },
  { poster_path: "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg", title: "Parasite" },
  { poster_path: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg", title: "The Matrix" },
  { poster_path: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg", title: "The Shawshank Redemption" },
  { poster_path: "/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg", title: "The Handmaid's Tale" },
  { poster_path: "/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg", title: "Stranger Things" },
  { poster_path: "/z1K4mJwISETia59rrnMdXxzoSrZ.jpg", title: "Westworld" },
  { poster_path: "/5NyLm42TmCqCMOZFvH4fcoSNKEW.jpg", title: "The Witcher" },
];

export default function PosterBackground() {
  const [posters, setPosters] = useState<PosterItem[]>([]);

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    if (!key) {
      setPosters(FALLBACK);
      return;
    }

    Promise.all([
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=1`).then((r) => r.json()),
      fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${key}&page=1`).then((r) => r.json()),
    ])
      .then(([movies, tv]) => {
        const all = [...(movies.results || []), ...(tv.results || [])]
          .filter((m: PosterItem) => m.poster_path)
          .slice(0, POSTER_COUNT);
        setPosters(all.length > 0 ? all : FALLBACK);
      })
      .catch(() => setPosters(FALLBACK));
  }, []);

  if (posters.length === 0) return <div className="poster-bg" />;

  return (
    <div className="poster-bg">
      {posters.map((m, i) => {
        const delay = (i * 0.7 + Math.random() * 2).toFixed(1);
        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={`${IMG_BASE}${m.poster_path}`}
            alt={m.title || m.name ? `Poster for ${m.title || m.name}` : ""}
            aria-hidden={!(m.title || m.name)}
            loading="eager"
            style={{ animationDelay: `-${delay}s` }}
          />
        );
      })}
    </div>
  );
}
