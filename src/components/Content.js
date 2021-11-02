import Images from "./Images";

const Content = (props) => {
  return (
    <div className="content-item">
      <h2>{props.title}</h2>
      <Images images={props.images} />
    </div>
  );
};
export default Content;
