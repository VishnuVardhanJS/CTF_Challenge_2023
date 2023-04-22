import Card from "../Card/Card";

import "./DisplayCard.css"

function DisplayCard({ data }) {
  return (
    <>
      {/* <h2 className="display-card-title">Heading</h2> */}
      <div className="display-card-container">
        {data.map((item, index) => {
          return (
            <Card key={index} title={item.title} url={item.url} />
          )
        })}
      </div>
    </>
  );
}

export default DisplayCard;