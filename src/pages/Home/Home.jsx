import { MainBanner } from './components/MainBanner/MainBanner';
import { AtomicServices } from './components/AtomicServices/AtomicServices';

export const Home = () => {
  return (
    <div className="home">
      <MainBanner />
      <AtomicServices />
    </div>
  );
};
