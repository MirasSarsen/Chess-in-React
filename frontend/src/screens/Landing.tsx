import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import Feature from '../components/Feature.jsx';
import Footer from '../components/Footer.jsx';

export const Landing = () => (
  <div>
    <Header />
    <Hero />
    <section className="features flex justify-between mt-12">
      <Feature
        image="/public/images/learning.png"
        title="Обучение"
        description="Изучайте стратегию и тактику с профессиональными тренерами."
      />
      <Feature
        image="/public/images/online-game.png"
        title="Онлайн-игра"
        description="Сыграйте партию в шахматы в реальном времени против соперников."
      />
      <Feature
        image="/public/images/tournament.png"
        title="Турниры"
        description="Участвуйте в турнирах и повышайте свой рейтинг!"
      />
    </section>
    <Footer />
  </div>
);
