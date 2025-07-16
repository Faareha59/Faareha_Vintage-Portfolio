function DesktopIcon({ icon, onClick }) {
  return (
    <div className="desktop-icon" onClick={onClick}>
      <img src={icon.icon} alt={icon.title} className="icon-img" />
      
      <div className="icon-text">{icon.title}</div>
    </div>
  )
}

export default DesktopIcon