import './FilterButton.css';

export function FilterButton({
  text,
  buttonClass,
  isShown,
  toggleVisibility,
  buttonName,
  options
}){

  const handleClick = () => toggleVisibility(buttonName);

  return (
    <div>
      <div className={`filter__button _btn-text ${buttonClass}`} onClick={handleClick}>
        {text}
      </div>

      {isShown && (
        <ul className='menu'>
          {options.map((option,index) => (
            <li className="menu__options" key={index} onClick={() => {console.log(options[index])}}> {option}</li>
          ))}
        </ul>
      )}
    </div>
  )
}