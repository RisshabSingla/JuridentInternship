import { PhotoSlider } from "../components/PhotoSlider";

function LandingPage() {
  return (
    <div>
      <div className="w-screen absolute">
        <div className="p-3" style={{ background: "#5000CA" }}>
          <p className="invisible">Let it be something</p>
          <p className="invisible">Let it be something</p>
          <p className="invisible">Let it be something</p>
        </div>
        <img src="./svgs/waves.svg" />
      </div>
      <div className="md:flex w-screen absolute z-10 p-2 ">
        <div className="h-1/2">
          <PhotoSlider length={4} />
        </div>
        <div className="md:w-1/2 text-center my-auto">
          <div className="font-extrabold	md:text-white">
            Let it be X Foundation
          </div>
          <div className="p-2 font-bold	md:text-white">
            Empowering Changemakers: Build a Brighter Future, One Project at a
            Time
          </div>
          <div className="font-medium	md:text-white">
            Connect with passionate individuals and organizations tackling the
            world's toughest challenges. Find funding, collaborate, and make a
            real difference.
          </div>

          <div className="p-3">
            <button className="hover:bg-violet-600 rounded-xl bg-violet-500 p-3 md:text-white font-bold">
              Donate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
