const ButtonCategory = ({ selectedCategory, label, onButtonCategoryClick }) => {
    return (
        <button
            id={label.toLowerCase()}
            className={`btn-ctg ${(selectedCategory === label.toLowerCase()) ? "active" : ""}`}
            onClick={onButtonCategoryClick}
        >{label}</button>
    )
}

export default ButtonCategory