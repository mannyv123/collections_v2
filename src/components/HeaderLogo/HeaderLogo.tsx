import logo from "../../assets/images/logo.svg";
import "./HeaderLogo.scss";

function HeaderLogo() {
   return (
      <div className='logo'>
         <img className='logo__image' src={logo} alt='header logo' />
         <h1 className='logo__text'>Collections</h1>
      </div>
   );
}

export default HeaderLogo;
