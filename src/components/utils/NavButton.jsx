import { setScrollTo } from "@/helpers/scrollTo";

export const PageSections = {
    Ejemplo : 'ejemplo',
    Equipo : 'equipo',
    Contacto : 'contacto',
    Nosotros : 'nosotros',
    NuestraApp : 'nuestra-app',
    Mision : 'mision',
    Vision : 'vision'
}

// Button used to scroll to specific page section
export const NavButton = ( {text, scrollSectionID} ) => {
    const handleClick = () => {
      setScrollTo(scrollSectionID);
    }

    return (
      <div className="nav-button">
        <button className="nav-button" onClick={handleClick}>{text}</button>
      </div>
    );
}