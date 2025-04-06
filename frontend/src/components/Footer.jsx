import './styles.css';

const Footer = () => (
    <footer className="bg-gray-800 text-white py-10 px-5">
        <div className="footer-column">
            <h3>О НАС</h3>
            <p>Шахматная Академия – место, где рождаются чемпионы!</p>
            <div className="footer-social flex gap-4">
                <a href="#"><img src="/icons/whatsapp.png" alt="WhatsApp" /></a>
                <a href="https://www.instagram.com/chess.akadem/"><img src="/icons/instagram.png" alt="Instagram" /></a>
                <a href="#"><img src="/icons/2gis.png" alt="2gis" /></a>
            </div>
        </div>
        <div className="footer-column">
            <h3>АКАДЕМИЯ</h3>
            <a href="#">Новости</a>
            <a href="#">Методика обучения</a>
            <a href="#">История шахмат</a>
        </div>
        <div className="footer-column">
            <h3>ПОДДЕРЖКА</h3>
            <a href="#">Связаться с нами</a>
            <a href="#">FAQ</a>
            <a href="#">Техническая помощь</a>
        </div>
        <div className="footer-column">
            <h3>КОНТАКТЫ</h3>
            <p>Email: info@chessacademy.com</p>
            <p>Тел: +7 (999) 123-45-67</p>
        </div>
    </footer>
);

export default Footer;
