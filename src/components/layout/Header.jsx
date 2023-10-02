import { NavButton, PageSections } from '../utils/NavButton';
import { SocialMediaButton, SocialMedias } from '../utils/SocialMediaButton';

export const Header = () => {
  return (
    <header id="header">
      <div style={{textAlign: 'center', fontWeight: '600'}}>
          <div className="header-row-1 flex-container">
            <div className="flex-container">
              <NavButton text = {"Equipo"} scrollSectionID = {PageSections.Equipo}></NavButton>
              <NavButton text = {"Contacto"} scrollSectionID = {PageSections.Contacto}></NavButton>
            </div>

            <div className="flex-container">
              <SocialMediaButton socialMedia = {SocialMedias.Facebook}></SocialMediaButton>
              <SocialMediaButton socialMedia = {SocialMedias.Twitter}></SocialMediaButton>
              <SocialMediaButton socialMedia = {SocialMedias.LinkedIn}></SocialMediaButton>
            </div>            
          </div>

          <div className="header-row-2 flex-container">
            <h1>NLS</h1>
          </div>

          <div className="header-row-3 flex-container">
            <NavButton text = {"Nosotros"} scrollSectionID = {PageSections.Nosotros}></NavButton>
            <NavButton text = {"Nuestra App"} scrollSectionID = {PageSections.NuestraApp}></NavButton>
            <NavButton text = {"Misión"} scrollSectionID = {PageSections.Mision}></NavButton>
            <NavButton text = {"Visión"} scrollSectionID = {PageSections.Vision}></NavButton>
          </div>
      </div>
    </header>
  )
}
