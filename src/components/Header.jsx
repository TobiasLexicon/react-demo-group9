export const Header = props => {
  const handleClick = event => {
    props.changePage(event.target.value);
  };

  return (
    <header className='siteHeader'>
      <ul>
        <li>
          <button value='1' onClick={handleClick}>
            Home
          </button>
        </li>
        <li>
          <button value='2' onClick={handleClick}>
            List
          </button>
        </li>
        <li>About</li>
      </ul>
    </header>
  );
};
