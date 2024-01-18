import React from "react";

const Profile = ({imgUrl,name,place}) => {
  return (
    <div className="w-full h-full grid place-content-center">
      <div className="flex justify-center">
        <img
          className={`h-28 w-28 rounded-full flex justify-center`}
          src={imgUrl}
        ></img>
      </div>

      <div className="flex gap-3">
        <h3 className="font-bold">{name}</h3>
        <h6 className="font-extralight">31</h6>
      </div>

      <h6 className="font-extralight flex justify-center ">{place}</h6>
    </div>
  );
};

export default Profile;
