// import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import FormPage from './FormPage';
// import NavList from '../components/UI/NavList';

function LayOut() {
  return (
    <>
      {/* <Nav /> */}
      <Outlet />
    </>
  );
}

export default LayOut;
