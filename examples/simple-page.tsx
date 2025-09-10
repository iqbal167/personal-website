import React from 'react';

const SimplePage = () => {
  return (
    <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md mx-auto bg-white rounded-lg shadow-md p-6'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold text-gray-900 mb-4'>
            Halaman Sederhana
          </h1>
          <p className='text-gray-600 mb-6'>
            Ini adalah contoh halaman sederhana menggunakan Next.js
          </p>

          <div className='space-y-4'>
            <button className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Tombol Utama
            </button>

            <div className='border-t pt-4'>
              <h2 className='text-lg font-semibold text-gray-800 mb-2'>
                Informasi
              </h2>
              <ul className='text-left text-gray-600 space-y-1'>
                <li>• Framework: Next.js</li>
                <li>• Styling: Tailwind CSS</li>
                <li>• Dibuat: {new Date().toLocaleDateString('id-ID')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimplePage;
