import React, { useEffect } from 'react';
import HomeHero from './home/HomeHero';
import HomeStatsTrustSection from './home/HomeStatsTrustSection';
import HomeSteps from './home/HomeSteps';
import HomeFeatures from './home/HomeFeatures';
import HomeMechanics from './home/HomeMechanics';
import HomeProperties from './home/HomeProperties';
import HomeTrustInfrastructure from './home/HomeTrustInfrastructure';
import HomeFaq from './home/HomeFaq';
import HomeClosingCta from './home/HomeClosingCta';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-transparent">
      <HomeHero />
      <HomeStatsTrustSection />
      <HomeSteps />
      <HomeFeatures />
      <HomeMechanics />
      <HomeProperties />
      <HomeTrustInfrastructure />
      <HomeFaq />
      <HomeClosingCta />
    </div>
  );
};

export default Home;
