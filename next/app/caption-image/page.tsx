"use client";
import { Meteors } from '@/components/ui/meteors';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { UploadCloudIcon } from 'lucide-react';
import Image from 'next/image';

import React, { useState } from 'react';

const CaptionImagePage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [caption, setCaption] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleDivClick = () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedFile) {
      setError('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('http://127.0.0.1:5000/caption-image', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setCaption(data.message);
      setError(null);

    } catch (err: any) {
      setError(err.message);
      setCaption('');
    }
  };

  const reset =() =>{
    setSelectedFile(null);
    setCaption('');
    setError(null);
  }

  return (
    <div className='w-full h-screen bg-black/90 flex flex-col items-center justify-center'>
      <Meteors />

      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-4xl font-bold sm:text-5xl lg:text-6xl bg-gradient-to-t from-gray-900 to-white text-transparent bg-clip-text pb-4 mt-10'>
          Image Captioning
        </h2>
        <p className='text-base text-white/55 mb-4'>
          Caption your images using AI in real-time
        </p>
      </div>

      <div
        className='flex flex-col cursor-pointer items-center justify-center border-solid border-2 border-white/55 w-[40rem] h-[25rem] m-5 rounded-md'
        onClick={handleDivClick}
        style={{ position: 'relative' }}
      >
        <input
          type='file'
          id='fileInput'
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        {selectedFile ? (
          <Image
            src={URL.createObjectURL(selectedFile)}
            alt='Image Captioning'
            layout='fill'
            objectFit='cover'
            className='rounded-md'
          />
        ) : (
          <>
            <UploadCloudIcon className='text-gray-500' />
            <div className='text-gray-500'>Click to upload an image</div>
          </>
        )}
      </div>

      <div className='m-4 flex flex-row items-center'>
        <form onSubmit={handleSubmit} className='flex flex-col items-center'>
          <button className="bg-slate-800 group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-4 px-10 ring-1 ring-white/10">
              <span className='text-1sm'>
                Caption Image
              </span>

            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
        </form>
        <h2 className='ml-10 text-base text-white/55 cursor-pointer'>
          <button onClick={reset}>
            Reset
          </button>
        </h2>
      </div>

      {/* {error && <div className='text-red-500'>{error}</div>} */}

      {caption && (
        <div className='text-white/55 mt-4'>
          <TextGenerateEffect words={caption} className='text-white/55' />
        </div>
      )}
    </div>
  );
};

export default CaptionImagePage;
