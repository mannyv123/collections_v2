import { useState } from "react";
import "./NavFeature.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function NavFeature() {
   const [menuOpen, setMenuOpen] = useState(false);

   const handleMenu = () => {
      setMenuOpen((prev) => !prev);
   };

   return (
      <nav className='nav'>
         <div className='nav__icon-container' onClick={handleMenu}>
            {menuOpen ? <CloseIcon fontSize='large' /> : <MenuIcon fontSize='large' />}
         </div>
         <div
            className={`nav__actions ${menuOpen ? "nav__actions--open" : "nav__actions--closed"}`}
         >
            <button className='nav__action-button'>Login</button>
            <button className='nav__action-button nav__action-button--sign-up'>Sign Up</button>
         </div>
      </nav>
   );
}

export default NavFeature;
