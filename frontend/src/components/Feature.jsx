import './styles.css';

const Feature = ({ image, title, description }) => (
    <div className="feature text-center p-6 bg-white rounded-lg shadow-md mx-4">
        <img src={image} alt={title} className="w-20 h-20 mb-4" />
        <h3 className="text-xl mb-2">{title}</h3>
        <p>{description}</p>
    </div>
);

export default Feature;
