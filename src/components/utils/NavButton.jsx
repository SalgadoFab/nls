import { setScrollTo } from "@/helpers/scrollTo";

// Enum used to identify different page sections
export const PageSections = {
    Ejemplo : 'ejemplo',
    Equipo : 'equipo',
    Contacto : 'contacto',
    Nosotros : 'nosotros',
    NuestraApp : 'nuestra-app',
    Mision : 'mision',
    Vision : 'vision'
}

// Enum used to override text align in the button
export const AlignTextModes = {
    Left : 0,
    Center : 1,
    Right : 2
}

// Button used to scroll to specific page section
export const NavButton = ( {text, scrollSectionID, alignTextMode} ) => {
    const handleClick = () => {
      setScrollTo(scrollSectionID);
    }

    // Condition to change the text align mode
    if (alignTextMode === AlignTextModes.Left) {
        return (
            <div>
              <button className="nav-button align-text-left" onClick={handleClick}>{text}</button>
            </div>
        );
    }
    else if (alignTextMode === AlignTextModes.Right) {
        return (
            <div>
                <button className="nav-button align-text-right" onClick={handleClick}>{text}</button>
            </div>
        );
    }
    
    // Text is centered by default
    return (
      <div>
        <button className="nav-button" onClick={handleClick}>{text}</button>
      </div>
    );
}