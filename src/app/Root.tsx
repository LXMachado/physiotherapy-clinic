import { Outlet } from 'react-router';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export function Root() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F8FAFC]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
