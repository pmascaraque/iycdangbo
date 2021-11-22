import data from "/data/sponsors";
import React from "react";

console.log(data);

const Tile = ({ sponsorUrl, imageURL }) => {
  return (
    <a href={sponsorUrl}>
      <img src={imageURL} />
    </a>
  );
};

const Tiles = ({ data }) => {
  const tileList = data.map((tile) => <Tile key={data.link} imageUrl={data.imageURL} />);
  return <div>{tileList}</div>;
};

function Sponsors() {
  return <Tiles data={data} />;
}

export default Sponsors;
