# Examples

Folder ini berisi contoh-contoh halaman untuk Next.js project dengan berbagai tingkat kompleksitas.

## File yang tersedia:

### Basic Examples (Tailwind CSS)

#### 1. `simple-page.tsx`

- Halaman statis sederhana
- Menggunakan Tailwind CSS untuk styling
- Cocok untuk halaman informasi atau landing page

#### 2. `page-example.tsx`

- Halaman interaktif dengan state management
- Menggunakan React Hooks (useState)
- Contoh form input dan counter
- Client-side rendering

### shadcn/ui Examples (Recommended)

#### 3. `shadcn-simple-page.tsx`

- Halaman statis menggunakan komponen shadcn/ui
- Implementasi Card, Button, Badge, Alert
- Design system yang konsisten
- Accessibility built-in

#### 4. `shadcn-interactive-page.tsx`

- Halaman interaktif dengan Tabs navigation
- Form dengan Input, Label, Dialog
- Counter dan Task manager
- State management dengan React hooks

#### 5. `shadcn-dashboard-page.tsx`

- Dashboard lengkap dengan statistik
- User management dengan CRUD operations
- Search dan filter functionality
- Advanced components: Dialog, Separator, Badge variants

## Komponen shadcn/ui yang digunakan:

- **Button** - Tombol dengan berbagai variant (default, secondary, outline, ghost, destructive)
- **Card** - Container untuk konten dengan header, content, description
- **Input & Label** - Form input dengan accessibility
- **Badge** - Label kecil untuk status dan kategori
- **Alert** - Notifikasi dan pesan informasi
- **Dialog** - Modal untuk form dan konfirmasi
- **Tabs** - Navigasi tab untuk mengorganisir konten
- **Separator** - Pembatas visual antar section

## Cara menggunakan:

### Opsi 1: Copy ke app directory

```bash
# Copy file ke app directory sebagai page
mkdir app/example
cp examples/shadcn-dashboard-page.tsx app/example/page.tsx

# Atau untuk halaman sederhana
mkdir app/simple
cp examples/shadcn-simple-page.tsx app/simple/page.tsx
```

### Opsi 2: Import sebagai component

```tsx
import ShadcnSimplePage from '../examples/shadcn-simple-page';
import ShadcnInteractivePage from '../examples/shadcn-interactive-page';
import ShadcnDashboardPage from '../examples/shadcn-dashboard-page';

export default function MyPage() {
  return (
    <div>
      <ShadcnDashboardPage />
    </div>
  );
}
```

### Opsi 3: Jalankan sebagai route

1. Buat folder baru di `app/` directory
2. Copy salah satu file example ke folder tersebut dengan nama `page.tsx`
3. Akses melalui browser di route yang sesuai

## Setup Requirements:

### Untuk shadcn/ui examples:

```bash
# Install komponen yang diperlukan (sudah terinstall)
npx shadcn@latest add button card input label badge separator tabs alert dialog

# Pastikan dependencies sudah terinstall
npm install class-variance-authority clsx tailwind-merge lucide-react
```

## Catatan:

- **Recommended**: Gunakan shadcn/ui examples untuk konsistensi design system
- File dengan 'use client' directive akan di-render di client-side
- shadcn/ui components sudah include accessibility dan dark mode support
- Semua komponen dapat di-customize melalui CSS variables
- TypeScript support built-in untuk better developer experience
