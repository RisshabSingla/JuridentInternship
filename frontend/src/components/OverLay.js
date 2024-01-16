import { PhotoSlider } from "./PhotoSlider";

function OverLay({ setOverLayText, overLayText }) {
  return (
    <div className="p-2">
      <div className="overflow-auto w-screen fixed h-screen z-10 flex justify-center items-center">
        <div className="w-11/12 h-screen overflow-auto rounded-xl">
          <div className="flex justify-end text-white p-2">
            <button className="p-2" onClick={() => setOverLayText("")}>
              <img width="20px " src="./svgs/cross.svg" alt="X"></img>
            </button>
          </div>
          <div className=" bg-zinc-300 rounded-2xl">
            <div className="p-2 text-2xl text-blue-600 font-extrabold text-center">
              {overLayText.name}
            </div>
            {overLayText.subheading && (
              <div className="p-2 text-xl text-blue-500 font-extrabold text-center">
                {overLayText.subheading}
              </div>
            )}
            {overLayText.date && (
              <div className="p-2 text-xl text-blue-500 font-extrabold text-center">
                {overLayText.date}
              </div>
            )}
            <div className="lg:flex">
              <div className="lg:w-1/2 mx-auto">
                <PhotoSlider length={4} />
              </div>
              <div className="lg:w-1/2">
                {overLayText.type && (
                  <div className="p-2 text-lg  font-bold text-center">
                    Category: {overLayText.type}
                  </div>
                )}
                <div className="p-2 text-lg  font-bold text-center">
                  {overLayText.description}
                </div>
                {overLayText.registration && (
                  <div className="p-2 text-lg  font-bold text-center">
                    <p>Registration: {overLayText.registration}</p>
                    <button className="p-2 m-2 bg-zinc-400 rounded-xl">
                      Register Now for the {overLayText.type}
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="p-2"> </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverLay;
