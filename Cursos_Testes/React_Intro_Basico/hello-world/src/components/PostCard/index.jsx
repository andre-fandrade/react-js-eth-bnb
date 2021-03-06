import "./styles.css";

export const PostCard = ({ title, imagem, id, body }) => {

  return (<div className="post">
    <img src={imagem} alt={title}></img>
    <div className="post-content">
      <h2>{title} - ID:{id}</h2>
      <p>{body}</p>
    </div>
  </div>)
};



