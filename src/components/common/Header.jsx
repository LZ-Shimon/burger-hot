const Header = ({ title, description }) => {
  return (
    <>
      <div className="row">
        <div className="col-12 mt-4">
          <h1>{title}</h1>
        </div>
        <div className="row">
          <div className="col-12">{description}</div>
        </div>
      </div>
    </>
  );
};

export default Header;
