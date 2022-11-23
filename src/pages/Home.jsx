import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar';
import Header from '../components/Header';
import Cart from '../components/Cart';

const Home = () => (
  <div className="bg-gray-100 flex flex-col h-screen">
    <Header />
    <div className="flex justify-between flex-1">
      <SideBar />
      <Outlet />
      <Cart />
    </div>
  </div>
);

export default Home;
