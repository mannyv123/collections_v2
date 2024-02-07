import "./HeaderFeature.scss";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import NavFeature from "../NavFeature/NavFeature";

function HeaderFeature() {
   return (
      <header className='header-container'>
         <HeaderLogo />
         <NavFeature />
         {/* InfoFeature */}
      </header>
   );
}

export default HeaderFeature;
