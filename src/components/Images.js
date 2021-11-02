const Images = (props) => {
  return (
    <div className="image-block">
      {props.images.map((image, elem) => {
        return <img src={image} alt="Show screenshot" />;
      })}
    </div>
  );
};

export default Images;
