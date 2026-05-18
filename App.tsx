/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Navbar, Hero, ProductSection, SecondaryGrid, Footer, ScrollToTop } from './components/FashionStore';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black selection:bg-sembilan-yellow selection:text-black font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ProductSection />
        <SecondaryGrid />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
