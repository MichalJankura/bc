import React from 'react';

import Analytics from '../components/Analytics';
import BlogCardGrid from '../components/BlogCardGrid';
import Canvas from '../components/Canvas';
import Comision from '../components/Comision';
import Contact from '../components/Contact';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Membership from '../components/Membership';
// import Product from '../components/Product';
import Team from '../components/Team';

const App = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>
      {/* <Canvas /> */}
      <LazyShow>
        <>
          {/* <Product /> */}
          <BlogCardGrid />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          {/* <Features /> */}
          <Membership />
        </>
      </LazyShow>
      <LazyShow>
        <>
          {/* <Features /> */}
          <Comision />
        </>
      </LazyShow>

      <LazyShow>
        <Team />
      </LazyShow>
      <LazyShow>
        <Contact />
      </LazyShow>
      <Analytics />
    </div>
  );
};
export default App;
