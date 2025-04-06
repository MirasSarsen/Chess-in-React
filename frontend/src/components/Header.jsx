import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => (
    <header className="bg-white flex justify-between items-center fixed top-0 left-0 right-0 z-10 py-4 px-20 shadow-md">
        <a href="#" className="logo">
            <img className="logo" src="/logo.png" alt="Логотип" />
        </a>
        <nav className="navbar">
            <Link to="/students">Ученики</Link>
            <Link to="/trainers">Тренеры</Link>
            <Link to="/schedule">Расписание</Link>
            <Link to="/tournaments">Турниры</Link>
            <Link to="/online-game">Онлайн-игра</Link>
        </nav>
    </header>
);

export default Header;
