# 📘 DocuHub

**DocuHub** adalah dashboard kolaboratif untuk dokumentasi proyek tim developer, startup, dan komunitas open-source.

## 🚀 Fitur Utama

- Struktur dokumentasi modular (Markdown)
- Timeline fitur & roadmap proyek
- Issue tracker dan feedback pengguna
- Integrasi GitHub, Figma, Notion
- AI Assistant untuk menulis dokumentasi (Opsional)
- Manajemen kolaborator dan peran tim

## 🛠️ Teknologi

- **Next.js (App Router)**
- **Tailwind CSS**
- **Supabase** (Auth + DB + Realtime)
- **OpenAI API** (AI Assistant)
- **Tiptap** / **Milkdown** untuk editor dokumen

## 📁 Struktur Folder

/docuhub ├── app/              # Routing Next.js ├── components/       # Komponen UI ├── lib/              # Supabase client & helper ├── styles/           # Tailwind CSS ├── utils/            # Fungsi utilitas ├── public/           # Aset statis ├── .env.local        # Environment variable

## 🧪 Cara Menjalankan

```bash
npm install
npm run dev

🔐 Supabase Setup

Buat project di https://supabase.com

Masukkan URL dan anon key ke .env.local


NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...

🧠 AI Assistant (Opsional)

Dapatkan API key dari OpenAI: https://platform.openai.com/account/api-keys

Tambahkan ke .env.local:


OPENAI_API_KEY=...

✅ Lisensi

MIT License

---
# docuhub
