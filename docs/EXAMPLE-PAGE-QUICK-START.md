# Quick Start Guide - shadcn/ui Examples

Panduan cepat untuk menjalankan contoh halaman dengan shadcn/ui components.

## 🚀 Langkah Cepat

### 1. Jalankan Dashboard Example

```bash
# Copy dashboard ke app directory
mkdir -p src/app/dashboard
cp examples/shadcn-dashboard-page.tsx src/app/dashboard/page.tsx

# Jalankan development server
npm run dev

# Buka http://localhost:3000/dashboard
```

### 2. Jalankan Interactive Example

```bash
# Copy interactive page ke app directory
mkdir -p src/app/interactive
cp examples/shadcn-interactive-page.tsx src/app/interactive/page.tsx

# Buka http://localhost:3000/interactive
```

### 3. Jalankan Simple Example

```bash
# Copy simple page ke app directory
mkdir -p src/app/simple
cp examples/shadcn-simple-page.tsx src/app/simple/page.tsx

# Buka http://localhost:3000/simple
```

## 🎨 Customization

### Mengubah Theme

Edit file `src/app/globals.css` untuk mengubah color scheme:

```css
:root {
  --primary: 210 40% 98%;
  --primary-foreground: 222.2 84% 4.9%;
  /* ... */
}
```

### Menambah Komponen Baru

```bash
# Install komponen tambahan
npx shadcn@latest add select checkbox switch textarea

# Lihat semua komponen tersedia
npx shadcn@latest add --help
```

## 📱 Responsive Design

Semua examples sudah responsive dengan breakpoints:

- `sm:` - 640px+
- `md:` - 768px+
- `lg:` - 1024px+
- `xl:` - 1280px+

## 🔧 Troubleshooting

### Error: Module not found '@/components/ui/...'

```bash
# Pastikan path alias sudah dikonfigurasi di tsconfig.json
# File sudah dikonfigurasi dengan benar
```

### Error: Tailwind classes tidak bekerja

```bash
# Restart development server
npm run dev
```

### Error: Icons tidak muncul

```bash
# Install lucide-react jika belum
npm install lucide-react
```

## 💡 Tips

1. **Gunakan Dashboard Example** sebagai starting point untuk aplikasi admin
2. **Interactive Example** cocok untuk halaman dengan form dan interaksi user
3. **Simple Example** ideal untuk landing page atau halaman informasi
4. Semua komponen dapat di-copy dan di-modify sesuai kebutuhan
5. Gunakan `npx shadcn@latest add [component]` untuk menambah komponen baru

## 🎯 Next Steps

1. Explore komponen lain di [shadcn/ui documentation](https://ui.shadcn.com)
2. Customize theme sesuai brand Anda
3. Tambahkan routing dan navigation
4. Integrate dengan backend API
5. Deploy ke Vercel atau platform lainnya
