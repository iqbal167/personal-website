# shadcn/ui Setup & Component Installation Guide

Panduan lengkap untuk menginstall dan menggunakan komponen shadcn/ui di project ini.

## 🚀 Quick Start

### Menggunakan NPM Scripts (Recommended)

```bash
# Install komponen dasar
npm run shadcn:basic

# Install komponen form
npm run shadcn:forms

# Install semua komponen essential
npm run shadcn:all

# Lihat semua opsi
npm run shadcn:help
```

### Menggunakan Script Manual

**Linux/macOS:**

```bash
# Berikan permission execute
chmod +x scripts/install-shadcn-components.sh

# Install komponen
./scripts/install-shadcn-components.sh basic
```

**Windows PowerShell:**

```powershell
# Install komponen
.\scripts\install-shadcn-components.ps1 basic
```

## 📦 Available Component Sets

### 1. Basic Components (`npm run shadcn:basic`)

Komponen essential untuk memulai:

- `button` - Tombol dengan berbagai variant
- `card` - Container untuk konten
- `input` - Input field
- `label` - Label untuk form
- `badge` - Label kecil untuk status

### 2. Form Components (`npm run shadcn:forms`)

Komponen untuk form dan input:

- `input` - Text input
- `label` - Form labels
- `textarea` - Multi-line text input
- `select` - Dropdown selection
- `checkbox` - Checkbox input
- `radio-group` - Radio button group
- `switch` - Toggle switch
- `form` - Form wrapper dengan validation

### 3. Layout Components (`npm run shadcn:layout`)

Komponen untuk layout dan struktur:

- `card` - Content containers
- `separator` - Visual dividers
- `tabs` - Tab navigation
- `sheet` - Slide-out panels
- `accordion` - Collapsible content
- `collapsible` - Expandable sections

### 4. Feedback Components (`npm run shadcn:feedback`)

Komponen untuk notifikasi dan feedback:

- `alert` - Alert messages
- `dialog` - Modal dialogs
- `toast` - Toast notifications (deprecated, use sonner)
- `sonner` - Modern toast notifications
- `badge` - Status badges
- `progress` - Progress indicators

### 5. Data Components (`npm run shadcn:data`)

Komponen untuk menampilkan data:

- `table` - Data tables
- `pagination` - Page navigation
- `command` - Command palette
- `data-table` - Advanced data table

### 6. Navigation Components (`npm run shadcn:navigation`)

Komponen untuk navigasi:

- `menubar` - Menu bars
- `breadcrumb` - Breadcrumb navigation
- `navigation-menu` - Navigation menus
- `dropdown-menu` - Dropdown menus

### 7. Advanced Components (`npm run shadcn:advanced`)

Komponen advanced:

- `calendar` - Date picker calendar
- `date-picker` - Date selection
- `popover` - Floating content
- `tooltip` - Hover tooltips
- `hover-card` - Hover cards

## 🛠️ Manual Installation

### Install Specific Components

```bash
# Install satu komponen
npm run shadcn:add button

# Install beberapa komponen sekaligus
npm run shadcn:add button card input label
```

### Install dengan npx langsung

```bash
# Install komponen langsung
npx shadcn@latest add button card input

# Install dengan auto-confirm
npx shadcn@latest add button --yes
```

## 📁 File Structure

Setelah install, komponen akan tersimpan di:

```
src/
├── components/
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── ...
└── lib/
    └── utils.ts
```

## 🎨 Usage Examples

### Basic Button Usage

```tsx
import { Button } from '@/components/ui/button';

export default function MyComponent() {
  return (
    <div>
      <Button>Default Button</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='outline'>Outline</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button variant='destructive'>Destructive</Button>
    </div>
  );
}
```

### Card with Content

```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function MyCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content</p>
      </CardContent>
    </Card>
  );
}
```

### Form with Input

```tsx
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function MyForm() {
  return (
    <div className='space-y-2'>
      <Label htmlFor='email'>Email</Label>
      <Input id='email' type='email' placeholder='Enter your email' />
    </div>
  );
}
```

## 🎯 Recommended Installation Order

1. **Start with Basic**: `npm run shadcn:basic`
2. **Add Forms if needed**: `npm run shadcn:forms`
3. **Add Layout components**: `npm run shadcn:layout`
4. **Add Feedback components**: `npm run shadcn:feedback`
5. **Add specific components as needed**

## 🔧 Troubleshooting

### Common Issues

**1. Permission denied (Linux/macOS)**

```bash
chmod +x scripts/install-shadcn-components.sh
```

**2. PowerShell execution policy (Windows)**

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**3. Components not found**

```bash
# Make sure you're in the project root
cd /path/to/your/project
npm run shadcn:basic
```

**4. TypeScript errors**

```bash
# Restart TypeScript server in your editor
# Or restart development server
npm run dev
```

## 📚 Additional Resources

- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Component Examples](./examples/)
- [Radix UI Documentation](https://www.radix-ui.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)

## 💡 Tips

1. **Start Small**: Install basic components first, add more as needed
2. **Check Examples**: Look at `examples/` folder for usage patterns
3. **Customize**: All components can be customized via CSS variables
4. **TypeScript**: All components have full TypeScript support
5. **Accessibility**: Components include ARIA attributes and keyboard navigation
