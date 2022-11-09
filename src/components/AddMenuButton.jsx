const AddMenuButton = ({ label, onModalToggle }) => {
  return (
    <button
      className="btn-add-menu"
      onClick={onModalToggle}
    >{label}</button>
  )
}

export default AddMenuButton