import React from 'react';
import './StartMenu.css';

function StartMenu({ icons, onItemClick, onShutdown }) {
  const handleShutdownClick = () => {
    if (onShutdown) {
      onShutdown();
    }
  };

  const quickLinks = [
    { id: 'documents', label: 'My Documents', fallbackIcon: '/icons/Documents-icon.png' },
    { id: 'network', label: 'My Network Places', fallbackIcon: '/icons/Internet-icon.png' },
    { id: 'resume', label: 'My Resume', fallbackIcon: '/icons/resume%20icon.png' },
    { id: 'contact', label: 'Contact', fallbackIcon: '/icons/contacts-icon.png' },
  ];

  return (
    <div className="start-menu start-menu--open" role="menu" aria-label="Start menu">
      <div className="start-menu__header">
        <div className="start-menu__user">
          <div className="start-menu__avatar" aria-hidden="true" />
          <div>
            <div className="start-menu__user-name">Faareha</div>
            <div className="start-menu__user-subtitle">Portfolio Desktop</div>
          </div>
        </div>
      </div>

      <div className="start-menu__body">
        <div className="start-menu__column start-menu__programs">
          <div className="start-menu__section-title">Programs</div>
          <div className="start-menu__list" role="menuitemlist">
            {icons.map((icon) => (
              <button
                key={icon.id}
                type="button"
                className="start-menu__item"
                onClick={() => onItemClick(icon)}
              >
                <img src={icon.icon} alt="" aria-hidden="true" />
                <span>{icon.title}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="start-menu__column start-menu__links">
          <div className="start-menu__section-title">Places</div>
          <div className="start-menu__list">
            {quickLinks.map((link) => {
              const icon = icons.find((item) => item.id === link.id);
              const displayIcon = icon?.icon || link.fallbackIcon;
              const label = icon?.title || link.label;

              return (
                <button
                  key={link.id}
                  type="button"
                  className="start-menu__item start-menu__item--secondary"
                  onClick={() => icon && onItemClick(icon)}
                >
                  <img src={displayIcon} alt="" aria-hidden="true" />
                  <span>{label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="start-menu__footer">
        <button type="button" className="start-menu__shutdown" onClick={handleShutdownClick}>
          <img src="/icons/shutdown-icon.png" alt="" aria-hidden="true" />
          <span>Shutdown</span>
        </button>
      </div>
    </div>
  );
}

export default StartMenu;