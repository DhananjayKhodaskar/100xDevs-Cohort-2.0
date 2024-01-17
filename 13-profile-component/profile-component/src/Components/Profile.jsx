import React from "react";

const Profile = () => {
  const imgClass =
    'bg-[url("https://i.pinimg.com/originals/14/87/06/14870690c27adc50628dd18f87ca668d.jpg")]';

  return (
    <div className="w-full h-full grid place-content-center">
      <div className="flex justify-center">
        <div
          className={`bg-no-repeat h-28 w-28 ${imgClass} rounded-full bg-cover flex justify-center`}
        ></div>
      </div>

      <div className="flex gap-3">
        <h3 className="font-bold">Salena Gomez</h3>
        <h6 className="font-extralight">31</h6>
      </div>

      <h6 className="font-extralight flex justify-center ">London</h6>
    </div>
  );
};

export default Profile;
