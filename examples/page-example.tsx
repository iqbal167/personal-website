'use client';

import { useState } from 'react';

export default function PageExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  return (
    <main className='container mx-auto px-4 py-8'>
      <div className='max-w-2xl mx-auto'>
        <header className='text-center mb-8'>
          <h1 className='text-4xl font-bold text-gray-900 mb-2'>
            Contoh Halaman Next.js
          </h1>
          <p className='text-gray-600'>
            Halaman sederhana dengan interaksi dasar
          </p>
        </header>

        <div className='grid gap-6 md:grid-cols-2'>
          {/* Counter Section */}
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h2 className='text-xl font-semibold mb-4'>Counter</h2>
            <div className='text-center'>
              <div className='text-3xl font-bold text-blue-600 mb-4'>
                {count}
              </div>
              <div className='space-x-2'>
                <button
                  onClick={() => setCount(count - 1)}
                  className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded'
                >
                  -
                </button>
                <button
                  onClick={() => setCount(0)}
                  className='bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded'
                >
                  Reset
                </button>
                <button
                  onClick={() => setCount(count + 1)}
                  className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded'
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h2 className='text-xl font-semibold mb-4'>Form Input</h2>
            <div className='space-y-4'>
              <input
                type='text'
                placeholder='Masukkan nama Anda'
                value={name}
                onChange={e => setName(e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              {name && (
                <div className='p-3 bg-blue-50 rounded-md'>
                  <p className='text-blue-800'>
                    Halo, <strong>{name}</strong>! 👋
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className='mt-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg'>
          <h2 className='text-xl font-semibold mb-2'>Tentang Halaman Ini</h2>
          <ul className='space-y-1'>
            <li>✨ Menggunakan React Hooks (useState)</li>
            <li>🎨 Styling dengan Tailwind CSS</li>
            <li>⚡ Client-side rendering dengan &lsquo;use client&rsquo;</li>
            <li>📱 Responsive design</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
