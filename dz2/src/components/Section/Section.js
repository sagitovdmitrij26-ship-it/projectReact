import "./section.css";
function Section(props) {
  let { mz } = props;
  return (
    <div>
      {mz.map((song, index) => {
        return (
          <div className="song" key={index}>
            <h1>{song.title}</h1> <h3>{song.album}</h3> <h2>{song.year}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default Section;
