function pelicula(props) {
  return (
    <div className="movie-item-style-2">
      <img src={props.img} alt="" />
      <div className="mv-item-infor">
        <h6>
          <a href="moviesingle.html">
            {props.title} <span>{props.año}</span>
          </a>
        </h6>
        <p className="rate">
          <i className="ion-android-star"></i>
          <span>{props.calificacion}</span> /10
        </p>
        <p className="describe">
         {props.children}
        </p>
        <p className="run-time">
          {" "}
          Run Time: {props.duracion} . <span>MMPA: PG-13 </span> .{" "}
          <span>Release: {props.fecha}</span>
        </p>
        <p>
          Director: <a href="#">{props.director1}</a>
          <a href="#">{props.director2}</a>
        </p>
        <p>
          Stars: <a href="#">{props.actor1},</a>{" "}
          <a href="#">{props.actor2},</a> <a href="#"> {props.actor3}</a>
        </p>
      </div>
    </div>
  );
}
export default pelicula;

