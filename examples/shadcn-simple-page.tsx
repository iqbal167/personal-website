import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { InfoIcon, CheckCircleIcon, StarIcon } from 'lucide-react';

const ShadcnSimplePage = () => {
  return (
    <div className='min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto space-y-8'>
        {/* Header Section */}
        <div className='text-center space-y-4'>
          <h1 className='text-4xl font-bold tracking-tight'>
            Halaman Sederhana dengan shadcn/ui
          </h1>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Contoh implementasi komponen shadcn/ui dalam Next.js project
          </p>
        </div>

        {/* Alert Section */}
        <Alert>
          <InfoIcon className='h-4 w-4' />
          <AlertDescription>
            Halaman ini menggunakan komponen dari shadcn/ui library untuk
            tampilan yang konsisten dan modern.
          </AlertDescription>
        </Alert>

        {/* Cards Grid */}
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {/* Feature Card 1 */}
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <CheckCircleIcon className='h-5 w-5 text-green-500' />
                Komponen UI
              </CardTitle>
              <CardDescription>
                Menggunakan komponen yang sudah teruji dan konsisten
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-3'>
                <Badge variant='secondary'>Button</Badge>
                <Badge variant='secondary'>Card</Badge>
                <Badge variant='secondary'>Alert</Badge>
                <Badge variant='secondary'>Badge</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Feature Card 2 */}
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <StarIcon className='h-5 w-5 text-yellow-500' />
                Styling Modern
              </CardTitle>
              <CardDescription>
                Design system yang mengikuti best practices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-2'>
                <p className='text-sm text-muted-foreground'>
                  • Consistent spacing
                </p>
                <p className='text-sm text-muted-foreground'>
                  • Accessible components
                </p>
                <p className='text-sm text-muted-foreground'>
                  • Dark mode support
                </p>
                <p className='text-sm text-muted-foreground'>
                  • Responsive design
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Action Card */}
          <Card>
            <CardHeader>
              <CardTitle>Aksi Cepat</CardTitle>
              <CardDescription>
                Tombol-tombol dengan berbagai variant
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-3'>
              <Button className='w-full'>Primary Button</Button>
              <Button variant='secondary' className='w-full'>
                Secondary Button
              </Button>
              <Button variant='outline' className='w-full'>
                Outline Button
              </Button>
              <Button variant='ghost' className='w-full'>
                Ghost Button
              </Button>
            </CardContent>
          </Card>
        </div>

        <Separator />

        {/* Info Section */}
        <Card>
          <CardHeader>
            <CardTitle>Tentang Implementasi</CardTitle>
            <CardDescription>Detail teknis dari halaman ini</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='grid gap-4 md:grid-cols-2'>
              <div>
                <h4 className='font-semibold mb-2'>Komponen yang Digunakan:</h4>
                <ul className='space-y-1 text-sm text-muted-foreground'>
                  <li>• Button - Tombol dengan berbagai variant</li>
                  <li>• Card - Container untuk konten</li>
                  <li>• Badge - Label kecil untuk kategori</li>
                  <li>• Alert - Notifikasi informasi</li>
                  <li>• Separator - Pembatas visual</li>
                </ul>
              </div>
              <div>
                <h4 className='font-semibold mb-2'>Keunggulan:</h4>
                <ul className='space-y-1 text-sm text-muted-foreground'>
                  <li>• Konsistensi design system</li>
                  <li>• Accessibility built-in</li>
                  <li>• TypeScript support</li>
                  <li>• Customizable dengan CSS variables</li>
                  <li>• Tree-shakeable components</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ShadcnSimplePage;
