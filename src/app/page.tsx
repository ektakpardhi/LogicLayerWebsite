'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomeExperience from '@/components/HomeExperience';

export default function Home() {
  return (
    <>
      <Navbar sticky />
      <main><HomeExperience /></main>
      <Footer />
    </>
  );
}
