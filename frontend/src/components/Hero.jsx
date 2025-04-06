import './styles.css';

const Hero = () => (
    <section className="hero text-center py-16 bg-gradient-to-r from-green-500 to-green-900 text-white rounded-lg">
        <h1 className="text-3xl mb-4">Добро пожаловать в Шахматную Академию</h1>
        <p className="text-lg mb-6">Обучение, турниры и онлайн-игра – всё в одном месте</p>
        <a href="/online-game" className="button py-3 px-6 text-xl bg-white text-green-500 rounded-lg font-semibold">
            Начать игру
        </a>
    </section>
);

export default Hero;
