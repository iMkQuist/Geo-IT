import { useState } from 'react';
import Link from 'next/link';

// Importing components from public/pages
import Blog from '../../public/pages/blog';
import DiseaseMap from '../../public/pages/disease_map';
import EnvironmentalPollutionMap from '../../public/pages/environmental_pollution_map'; // Fixed typo
import Events from '../../public/pages/events';
import ForgotPassword from '../../public/pages/forgot_password';
import Forum from '../../public/pages/forum';
import HealthMapper from '../../public/pages/health_mapper';
import Index from '../../public/pages/index';
import Jobs from '../../public/pages/jobs';
import Learning from '../../public/pages/learning';
import Login from '../../public/pages/login';
import Marketplace from '../../public/pages/marketplace';
import Register from '../../public/pages/register';
import SupplyChainMapper from '../../public/pages/supply_chain_mapper';
import WaterSourceMapper from '../../public/pages/water_source_map';

const Page = () => {
  const [currentPage, setCurrentPage] = useState<string>('index');

  const renderPageContent = () => {
    switch (currentPage) {
      case 'index':
        return <Index />;
      case 'blog':
        return <Blog />;
      case 'disease_map':
        return <DiseaseMap />;
      case 'environmental_pollution_map':
        return <EnvironmentalPollutionMap />;
      case 'events':
        return <Events />;
      case 'forgot_password':
        return <ForgotPassword />;
      case 'forum':
        return <Forum />;
      case 'health_mapper':
        return <HealthMapper />;
      case 'jobs':
        return <Jobs />;
      case 'learning':
        return <Learning />;
      case 'login':
        return <Login />;
      case 'marketplace':
        return <Marketplace />;
      case 'register':
        return <Register />;
      case 'supply_chain_mapper':
        return <SupplyChainMapper />;
      case 'water_source_map':
        return <WaterSourceMapper />;
      default:
        return <Index />;
    }
  };

  return (
    <div>
      <nav>
        <ul>
          <li><Link href="#" onClick={() => setCurrentPage('index')}>Home</Link></li>
          <li><Link href="#" onClick={() => setCurrentPage('blog')}>Blog</Link></li>
          <li><Link href="#" onClick={() => setCurrentPage('disease_map')}>Disease Map</Link></li>
          <li><Link href="#" onClick={() => setCurrentPage('environmental_pollution_map')}>Environmental Pollution Map</Link></li>
          <li><Link href="#" onClick={() => setCurrentPage('events')}>Events</Link></li>
          <li><Link href="#" onClick={() => setCurrentPage('forgot_password')}>Forgot Password</Link></li>
          <li><Link href="#" onClick={() => setCurrentPage('forum')}>Forum</Link></li>
          <li><Link href="#" onClick={() => setCurrentPage('health_mapper')}>Health Mapper</Link></li>
          <li><Link href="#" onClick={() => setCurrentPage('jobs')}>Jobs</Link></li>
          <li><Link href="#" onClick={() => setCurrentPage('learning')}>Learning</Link></li>
          <li><Link href="#" onClick={() => setCurrentPage('login')}>Login</Link></li>
          <li><Link href="#" onClick={() => setCurrentPage('marketplace')}>Marketplace</Link></li>
          <li><Link href="#" onClick={() => setCurrentPage('register')}>Register</Link></li>
          <li><Link href="#" onClick={() => setCurrentPage('supply_chain_mapper')}>Supply Chain Mapper</Link></li>
          <li><Link href="#" onClick={() => setCurrentPage('water_source_map')}>Water Source Map</Link></li>
        </ul>
      </nav>
      <main>
        {renderPageContent()}
      </main>
    </div>
  );
};

export default Page;
