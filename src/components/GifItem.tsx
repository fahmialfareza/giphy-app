import React from "react";
import Image from "react-bootstrap/Image";
import { GiphyData } from "../models/giphy";

interface GifItemProps {
  giphy: GiphyData;
}

function GifItem({ giphy }: GifItemProps) {
  return (
    <div className="card h-100">
      <Image
        src={giphy?.images?.fixed_height?.url}
        fluid={true}
        thumbnail={true}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}

export default GifItem;
