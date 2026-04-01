const CONFIG = {
  name: "VVOID",
  tagline: "Video Editor & Motion Designer",
  about: "Edição criativa com foco em storytelling visual. Especializado em conteúdo para redes sociais, vlogs e vídeos institucionais.",

  contact: {
    gmail: "fabiodasilvajuniosilva@gmail.com",
    x: "https://x.com/Vvoid_99",
    discord: "vvoid_00",
  },

  videos: [
    {
  id: 1,
  tags: ["Gaming", "Reels"],
  youtubeId: "9cC7fR1kmTk",
  description: "Reels de gaming cobrindo novo update — edição ritmada com foco em retenção."
},
{
  id: 2,
  tags: ["Gaming", "Cinematic"],
  youtubeId: "tO64W1wQoC4",
  description: "Gameplay longa - Edição dinâmica com timelapses. Foco em retenção.",
},
{
  id: 3,
  tags: ["Social Media", "Motion"],
  youtubeId: "9Y5zEF1cpRE",
  description: "Animação 2D para divulgação de servidor no Discord — motion aplicado a social media",
},
{
  id: 4,
  tags: ["Educational", "Motion"],
  youtubeId: "QHgYD6ybUo0",
  description: "Explainer video sobre CDI — animação 2D explicando o mercado interbancário brasileiro.",
},
{
  id: 5,
  tags: ["Educational", "Motion"],
  youtubeId: "zmriWLGMBys",
  description: "Explainer video sobre a taxa Selic — animação 2D sobre a taxa básica de juros do Brasil.",
},
  ],

  categories: ["Todos", "Cinematic", "Vlog", "Social Media", "Gaming", "Institucional", "Motion", "Educational"],
};

// ============================================================
// ÍCONES
// ============================================================

const IconGmail = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
  </svg>
);

const IconX = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const IconDiscord = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.079.11 18.1.127 18.114a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const IconPlay = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M8 5v14l11-7z"/>
  </svg>
);

const IconClose = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
  </svg>
);

// ============================================================
// COMPONENTES
// ============================================================

function VideoModal({ video, onClose }) {
  if (!video) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.92)" }}
      onClick={onClose}
    >
      <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white opacity-60 hover:opacity-100 transition-opacity"
        >
          <IconClose />
        </button>
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="mt-4 px-1">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 8 }}>
            {video.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block text-xs font-bold tracking-widest uppercase px-2 py-1 rounded"
                style={{ background: "#E8FF00", color: "#000" }}
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-400 text-sm">{video.description}</p>
        </div>
      </div>
    </div>
  );
}

function VideoCard({ video, onClick }) {
  return (
    <div
      className="group cursor-pointer relative overflow-hidden rounded-xl"
      style={{ background: "#111" }}
      onClick={() => onClick(video)}
    >
      <div className="relative w-full overflow-hidden" style={{ paddingBottom: "56.25%" }}>
        <img
          src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
          alt={video.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            className="flex items-center justify-center rounded-full w-16 h-16 text-black"
            style={{ background: "#E8FF00" }}
          >
            <IconPlay />
          </div>
        </div>
      </div>
      <div className="p-4">
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {video.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block text-xs font-bold tracking-widest uppercase px-2 py-1 rounded"
              style={{ background: "#E8FF00", color: "#000" }}
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-500 text-sm mt-2">{video.description}</p>
      </div>
    </div>
  );
}

// ============================================================
// APP PRINCIPAL
// ============================================================

function Portfolio() {
  const [activeCategory, setActiveCategory] = React.useState("Todos");
  const [selectedVideo, setSelectedVideo] = React.useState(null);
  const [copied, setCopied] = React.useState(false);

  const filtered =
    activeCategory === "Todos"
      ? CONFIG.videos
      : CONFIG.videos.filter((v) => v.tags.includes(activeCategory));

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText(CONFIG.contact.discord);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="min-h-screen text-white"
      style={{ background: "#0a0a0a" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-body { font-family: 'DM Sans', sans-serif; }
        .filter-btn { transition: all 0.15s ease; border: 1px solid #1f2937; color: #9ca3af; border-radius: 9999px; padding: 6px 16px; font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; background: transparent; cursor: pointer; }
        .filter-btn.active { background: #E8FF00; color: #000; border-color: transparent; }
        .filter-btn:not(.active):hover { background: #1a1a1a; }
        .contact-link { transition: all 0.2s ease; display: flex; align-items: center; gap: 12px; padding: 16px 24px; border-radius: 12px; border: 1px solid #1f2937; color: #d1d5db; text-decoration: none; font-family: 'DM Sans', sans-serif; background: transparent; cursor: pointer; font-size: 14px; }
        .contact-link:hover { color: #E8FF00; transform: translateY(-2px); }
        .accent { color: #E8FF00; }
      `}</style>

      {/* HEADER */}
      <header style={{ borderBottom: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: 1152, margin: "0 auto", padding: "24px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <h1 className="font-display accent" style={{ fontSize: 36, letterSpacing: 2, margin: 0 }}>{CONFIG.name}</h1>
            <p className="font-body" style={{ color: "#6b7280", fontSize: 12, marginTop: 2, letterSpacing: 4, textTransform: "uppercase" }}>{CONFIG.tagline}</p>
          </div>
          <nav style={{ display: "flex", gap: 24 }}>
            <a href="#work" style={{ color: "#9ca3af", textDecoration: "none", fontSize: 14, fontFamily: "'DM Sans', sans-serif" }}>Work</a>
            <a href="#contact" style={{ color: "#9ca3af", textDecoration: "none", fontSize: 14, fontFamily: "'DM Sans', sans-serif" }}>Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section style={{ maxWidth: 1152, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ maxWidth: 640 }}>
          <p className="font-body" style={{ color: "#d1d5db", fontSize: 18, lineHeight: 1.7 }}>{CONFIG.about}</p>
          <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#E8FF00" }} />
            <span className="font-body" style={{ color: "#6b7280", fontSize: 13 }}>Disponível para projetos</span>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 32 }}>
          <h2 className="font-display" style={{ fontSize: 48, margin: 0 }}>TRABALHOS</h2>
          <span className="font-body" style={{ color: "#4b5563", fontSize: 13 }}>{CONFIG.videos.length} projetos</span>
        </div>

        {/* Filtros */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 40 }}>
          {CONFIG.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`filter-btn${activeCategory === cat ? " active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
          {filtered.map((video) => (
            <VideoCard key={video.id} video={video} onClick={setSelectedVideo} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="font-body" style={{ color: "#4b5563", textAlign: "center", padding: "80px 0" }}>Nenhum vídeo nessa categoria.</p>
        )}
      </section>

      {/* DIVIDER */}
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ height: 1, background: "linear-gradient(90deg, #E8FF00, transparent)" }} />
      </div>

      {/* CONTACT */}
      <section id="contact" style={{ maxWidth: 1152, margin: "0 auto", padding: "96px 24px" }}>
        <h2 className="font-display" style={{ fontSize: 48, margin: 0 }}>CONTATO</h2>
        <p className="font-body" style={{ color: "#6b7280", marginBottom: 48, marginTop: 8 }}>Vamos trabalhar juntos.</p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          <a href={`mailto:${CONFIG.contact.gmail}`} className="contact-link">
            <IconGmail />
            {CONFIG.contact.gmail}
          </a>

          <a href={CONFIG.contact.x} target="_blank" rel="noopener noreferrer" className="contact-link">
            <IconX />
            @{CONFIG.contact.x.split("/").pop()}
          </a>

          <button onClick={handleCopyDiscord} className="contact-link">
            <IconDiscord />
            {copied ? "Copiado!" : CONFIG.contact.discord}
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #1a1a1a", padding: "24px" }}>
        <div style={{ maxWidth: 1152, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span className="font-display accent" style={{ fontSize: 20 }}>{CONFIG.name}</span>
          <span className="font-body" style={{ color: "#374151", fontSize: 11 }}>© {new Date().getFullYear()}</span>
        </div>
      </footer>

      <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </div>
  );
}

// ============================================================
// RENDERIZAÇÃO
// ============================================================
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Portfolio />);
