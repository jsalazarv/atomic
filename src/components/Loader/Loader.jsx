import './Loader.css';

export const Loader = ({ title = '', image = '' }) => {
  return (
    <div className="loader bg-[url('./assets/images/home/banner-background.png')]">
      <div className="loader__content">
        <img className="image" src={image} alt="" />
        <h2 className="title">{title}</h2>
      </div>
    </div>
  );
};
