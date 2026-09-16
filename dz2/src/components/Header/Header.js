import './Header.css';
function Header({navigation}) {
    return (
        <div className="header">
            <ul>
                {Object.keys(navigation).map(elem => (
                    <li key={elem}><a href={navigation[elem]}>{elem}</a></li>
                ))}
            </ul>
        </div>
    )
}
export default Header;