import avatar from './assets/icon.jpg'

const style = `
@import url('https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&family=Cinzel+Decorative:wght@400&family=Crimson+Text:ital,wght@0,400;1,400&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  background: #0a0000;
  color: #fff;
  font-family: 'Crimson Text', serif;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: crosshair;
  overflow-x: hidden;
}

.cross {
  position: fixed;
  user-select: none;
  pointer-events: none;
  font-family: serif;
  color: #1a0000;
}
.c1 { top: 8%;  left: 6%;  font-size: 1.8rem; color: #2a0000; }
.c2 { top: 14%; right: 8%; font-size: 1rem;   color: #1e0000; }
.c3 { top: 38%; left: 4%;  font-size: 0.9rem; color: #220000; }
.c4 { top: 54%; right: 5%; font-size: 1.5rem; color: #2a0000; }
.c5 { bottom: 22%; left: 7%;  font-size: 1rem;   color: #1e0000; }
.c6 { bottom: 9%;  right: 6%; font-size: 1.7rem; color: #250000; }
.c7 { top: 70%; left: 14%;  font-size: 0.75rem; color: #1a0000; }
.c8 { top: 27%; right: 17%; font-size: 0.85rem; color: #1a0000; }

.page {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 380px;
  padding: 60px 24px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
}

/* Avatar */
.avatar-wrap {
  position: relative;
  width: 120px;
  height: 120px;
}
.avatar-outer {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px solid #cc0000;
  box-shadow: 0 0 12px rgba(180,0,0,0.3);
}
.avatar-inner {
  position: absolute;
  inset: 8px;
  border-radius: 50%;
  border: 1px dashed #550000;
}
.avatar {
  position: absolute;
  inset: 16px;
  border-radius: 50%;
  background: #0d0000;
  overflow: hidden;
}
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.avatar-cross {
  position: absolute;
  top: -6px;
  right: 0;
  font-size: 16px;
  color: #cc0000;
  text-shadow: 0 0 8px rgba(200,0,0,0.6);
}

/* Name */
.name {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  text-align: center;
}
.name-first {
  font-family: 'UnifrakturMaguntia', cursive;
  font-size: clamp(3rem, 12vw, 4.5rem);
  font-weight: 400;
  color: #fff;
  line-height: 1;
  letter-spacing: 2px;
  text-shadow: 0 0 20px rgba(180,0,0,0.4);
}
.name-last {
  font-family: 'Cinzel Decorative', serif;
  font-size: clamp(0.6rem, 2vw, 0.8rem);
  color: #880000;
  letter-spacing: 8px;
  text-transform: uppercase;
}

/* Divider */
.divider {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
}
.divider::before, .divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, #550000, transparent);
}
.divider span {
  color: #cc0000;
  font-size: 13px;
  text-shadow: 0 0 6px rgba(200,0,0,0.5);
}

/* Links */
.links {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}
.social-btn {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 22px;
  text-decoration: none;
  color: #fff;
  border: 1px solid #330000;
  background: #0a0000;
  font-family: 'Cinzel Decorative', serif;
  font-size: 0.7rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
  position: relative;
}
.social-btn::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0;
  width: 0; height: 1px;
  background: #cc0000;
  transition: width 0.3s;
}
.social-btn:hover {
  border-color: #cc0000;
  background: #110000;
  box-shadow: 0 0 16px rgba(180,0,0,0.15);
}
.social-btn:hover::after { width: 100%; }
.social-icon { display: flex; align-items: center; color: #880000; }
.social-label { flex: 1; }

/* Footer */
.footer {
  font-family: 'Crimson Text', serif;
  font-size: 0.78rem;
  color: #3a0000;
  text-align: center;
  letter-spacing: 1px;
}
`

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.07a8.16 8.16 0 004.77 1.52V7.14a4.85 4.85 0 01-1-.45z"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  )
}

export default function App() {
  return (
    <>
      <style>{style}</style>

      <span className="cross c1">✝</span>
      <span className="cross c2">✝</span>
      <span className="cross c3">✝</span>
      <span className="cross c4">✝</span>
      <span className="cross c5">✝</span>
      <span className="cross c6">✝</span>
      <span className="cross c7">✝</span>
      <span className="cross c8">✝</span>

      <div className="page">
        <div className="avatar-wrap">
          <div className="avatar-outer" />
          <div className="avatar-inner" />
          <div className="avatar">
            <img src={avatar} alt="Vallen Ousbourne" />
          </div>
          <div className="avatar-cross">✝</div>
        </div>

        <div className="name">
          <span className="name-first">Vallen</span>
          <span className="name-last">Ousborne</span>
        </div>

        <div className="divider"><span>✝</span></div>
        <div>
          não se deixe iludir pelas fotos, ela não é mais assim...
          apenas uma dependente emocional que vai te destruir, vai seguir varios homens pq ja acabou com um. fala que todos abandonam ela, isso é um aviso a todos que forem aparecer, borderline, dei flores, presença, tudo de mim, tentei ser diferente dos antigos ex dela, não é suficiente, nunca vai ser, e agora que eu nao tenho mais nada virei um "filho da puta". eu to doente por conta dela e vai me tratar como vilao (assim como você já foi "vilão" de um antigo relacionamento seu), você é o proximo. se você duvida eu tenho provas, (@aeternuspoison) no instagram
          <br/>
          quando ela ver isso ela vai apagar, mas se vc viu isso antes, tenta a sorte e veja acontecer exatamente o que eu falei... eu amei ela de verdade e ela fez isso comigo.
          <br/>
          ela ainda tá com meus livros, não vai me devolver, é uma das coisas mais preciosas que eu tenho.
          <br/>
          eu a amei não por aparencia, mas por um personagem que ela criou e demorou a revelar
        </div>
        <p className="footer">© {new Date().getFullYear()} Vallen Ousborne</p>
      </div>
    </>
  )
}