# 🚀 RikAI - Din AI-Assistent för Ekonomi, Affärer & Marknadsföring

En mörk, modern AI-app med 5 kraftfulla verktyg för att hjälpa dig och andra lyckas ekonomiskt och affärsmässigt.

## 🎯 Features

### 5 Huvudverktyg
1. **🤖 AI-assistent** (`/chatt`) - Chattgränssnitt för frågor om ekonomi, affärsidéer mm
2. **📈 Ekonomi & Investeringar** (`/finans`) - Sparplan, investeringsstrategi, budgetoptimering
3. **💡 Affärsidéer** (`/ideas`) - Generera skräddarsydda affärsidéer baserat på budget & intressen
4. **✍️ Innehållsskapare** (`/innehåll`) - Skapa innehåll för Instagram, annonser, bloggar, e-post, LinkedIn
5. **📣 AI-marknadsföringsassistent** (`/marknadsföring`) - Ladda upp produktbild → Få annonstexter, videomanus, hashtags & AI-genererad video

## 🎨 Design
- **Tema:** Mörkt (nästan svart bakgrund) med lila + cyan gradient
- **Typsnitt:** Syne (rubriker) + Inter (brödtext)
- **Animatör:** Framer Motion
- **Responsiv:** Mobile-first design

## 🛠️ Tech Stack
- **Frontend:** Next.js 14 + TypeScript + Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** Supabase (PostgreSQL)
- **Auth:** Supabase Auth
- **AI:** OpenAI API (GPT-4)
- **Video Generation:** Runway AI API
- **Image Upload:** AWS S3 / Supabase Storage

## 📦 Project Structure
```
RikAI/
├── app/
│   ├── layout.tsx
│   ├── page.tsx (Startsida)
│   ├── chatt/
│   ├── finans/
│   ├── ideas/
│   ├── innehål/
│   ├── marknadsföring/
│   └── api/
│       ├── chat/
│       ├── finance/
│       ├── ideas/
│       ├── content/
│       └── marketing/
├── components/
├── lib/
├── styles/
└── public/
```

## 🚀 Getting Started

```bash
# Clone repositoryt
git clone https://github.com/abdelazizadem3-code/RikAI.git
cd RikAI

# Installera dependencies
npm install

# Sätt upp environment variabler
cp .env.example .env.local

# Kör utvecklingsserver
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000) i din webbläsare.

## 📝 Environment Variables
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
OPENAI_API_KEY=
RUNWAY_API_KEY=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
```

## 📚 License
MIT

---

**Byggd med ❤️ för att hjälpa dig lyckas**
