import React from "react";
import Profile from "./Profile";

const Card = ({imgUrl,name,followers,likes,photos,place}) => {
  const imgClass =
    'bg-[url("https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg")]';
  return (
    <div
      className={`bg-fixed bg-no-repeat h-96 w-80 ${imgClass}  bg-top bg-slate-100 flex flex-col divide-y gap-3 mt-16`}
    >
      {/* This div will take up the available space */}
      <div className="mt-36">
        <Profile imgUrl={imgUrl} name={name} place={place}/>
      </div>

      <div className="divide-x-0"></div>
      <div className="flex justify-around">
        <div className="flex flex-col ">
          <div className="font-bold">{followers}</div>
          <div className="font-light">Followers</div>
        </div>
        <div>
          <h2 className="font-bold">{likes}</h2>
          <p className="font-light">Likes</p>
        </div>
        <div>
          <h2 className="font-bold">{photos}</h2>
          <p className="font-light">Photos</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
