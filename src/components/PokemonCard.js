import { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ id, name, hp, sprites }) {
  const [isFront, setIsFront] = useState(true)
  
  const handleFlip = () => {
    setIsFront(!isFront)
  }

  return (
    <Card>
      <div id={id}>
        <div onClick={handleFlip} className="image">
          <img src={isFront ? sprites.front : sprites.back} alt={name}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
