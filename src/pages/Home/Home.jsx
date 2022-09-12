import { MainBanner } from './components/MainBanner/MainBanner';
import { AtomicServices } from './components/AtomicServices/AtomicServices';
import { HiringProcess } from './components/HiringProcess/HiringProcess';
import { WhyAtomic } from './components/WhyAtomic/WhyAtomic.jsx';

export const Home = () => {
  return (
    <div className="home">
      <MainBanner />
      <AtomicServices />
      <HiringProcess />
      <WhyAtomic />
    </div>
  );
};
