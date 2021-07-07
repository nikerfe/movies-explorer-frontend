import './NavTab.css';

function NavTab(props) {
  return (
    <section className="nav-tab">
      <div className={`nav-tab__container nav-tab__container_type_${props.section}`}>
        <h2 className="nav-tab__title">{props.name}</h2>
      </div>
    </section>
  )
}

export default NavTab;