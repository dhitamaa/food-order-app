import "./style/MenuSelect.css"

const MenuSelect = ({ selectedCategory, onSelectChange }) => {
  return (
    <select
      className="menu-select"
      defaultValue={selectedCategory}
      onChange={onSelectChange}
    >
      <option value="semua">Semua</option>
      <option value="populer">Populer</option>
      <option value="makanan">Makanan</option>
      <option value="minuman">Minuman</option>
      <option value="cemilan">Cemilan</option>
    </select>
  )
}

export default MenuSelect