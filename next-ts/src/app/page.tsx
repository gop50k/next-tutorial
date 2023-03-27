'use client';

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  interface SearchCatImage {
    id: string;
    url: string;
    width: number;
    height: number;
  }

  const [catImageUrl, setCatImageUrl] = useState("");

  const fetchCatImage = async (): Promise<SearchCatImage> => {
    const res = await fetch('https://api.thecatapi.com/v1/images/search')
    const result = await res.json();
    return result[0]
  };

  const handleClick = async () => {
    const catImage = await fetchCatImage();
    setCatImageUrl(catImage.url);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <h1>猫画像アプリ</h1>
      <img
        src={catImageUrl}
        width={500}
        height='auto'
      />
      <button style={{ marginTop: '18' }} onClick={handleClick}>
        今日の猫画像
      </button>
    </div>
  )
}
