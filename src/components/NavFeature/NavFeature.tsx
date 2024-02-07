import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./NavFeature.scss";

function NavFeature() {
   return (
      <nav className='nav'>
         <ButtonComponent variant='secondary' text='Login' />
         <ButtonComponent variant='primary' text='Sign Up' />
      </nav>
   );
}

export default NavFeature;
