import { useState, useEffect } from "react";

export const PhotoSlider = ({ length }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentPhotoIndex, length]);

  return (
    <div>
      <img
        className="max-h-[400px] p-3"
        style={{ borderRadius: "55%" }}
        src={`./images/landingImage${currentPhotoIndex + 1}.jpeg`}
        width="600px"
      />
    </div>
  );
};
