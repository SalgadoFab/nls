import { NavButton, PageSections, AlignTextModes } from '../utils/NavButton';
import { SocialMediaButton, SocialMedias } from '../utils/SocialMediaButton';

export const Footer = () => {
  return (
    <footer id="footer" >
      <div className="flex-container full-vertical-space">
        <div className="footer-column-1 column full-vertical-space">
          <h1>NLS</h1>
          <p className="rights-reserved-text">© 2023 Derechos reservados</p>
        </div>

        <div className="footer-column-2 flex-container">
          <div className="column column-1">
            <NavButton text = {"Nosotros"} scrollSectionID = {PageSections.Nosotros} alignTextMode = {AlignTextModes.Left}></NavButton>
            <NavButton text = {"Nuestra App"} scrollSectionID = {PageSections.NuestraApp} alignTextMode = {AlignTextModes.Left}></NavButton>
          </div>

          <div className="column column-2">
            <NavButton text = {"Misión"} scrollSectionID = {PageSections.Mision} alignTextMode = {AlignTextModes.Left}></NavButton>
            <NavButton text = {"Visión"} scrollSectionID = {PageSections.Vision} alignTextMode = {AlignTextModes.Left}></NavButton>
          </div>

          <div className="column column-3">
            <NavButton text = {"Equipo"} scrollSectionID = {PageSections.Equipo} alignTextMode = {AlignTextModes.Left}></NavButton>
            <NavButton text = {"Contacto"} scrollSectionID = {PageSections.Contacto} alignTextMode = {AlignTextModes.Left}></NavButton>
          </div>            
        </div>
        
        <div className="footer-column-3 flex-container">
          <SocialMediaButton socialMedia = {SocialMedias.LinkedIn}></SocialMediaButton>
          <SocialMediaButton socialMedia = {SocialMedias.Twitter}></SocialMediaButton>
          <SocialMediaButton socialMedia = {SocialMedias.Facebook}></SocialMediaButton>
        </div>
      </div>
    </footer>
  )
}
