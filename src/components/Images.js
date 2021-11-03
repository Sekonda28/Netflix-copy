const Images = (props) => {
  return (
    <div className="image-block">
      {props.images.map((image, index) => {
        return <img key = {index} src={image} alt="Show screenshot" />;
      })}
    </div>
  );
};

export default Images;
