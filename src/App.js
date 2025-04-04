import { RouterProvider } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import "swiper/css/effect-coverflow";
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './assets/css/style.css';
import "@measured/puck/puck.css";
import ThemeSwitcher from './Components/common/ThemeSwitcher';
import { routes } from './Routes/Routes';
import { Toaster } from 'react-hot-toast';
import CssVariableEditor from './CssVariableEditor';
import Loading from './lib/Loading';
import Logout from './logOut';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.body.classList.remove("dark-theme");
  },[])
  return (
    <div>
      {/* <Loader/> */}
      {/* <ThemeSwitcher/> */}
      <RouterProvider router={routes} />
      {/* <CssVariableEditor filePath={'src/assets/css/style.css'}/> */}
      <Toaster position='top right' />
      <Loading/>
      {/* <Logout/> */}
    </div>
  );
}

export default App;
