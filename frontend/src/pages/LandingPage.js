import { PhotoSlider } from "../components/PhotoSlider";

function HeadLine() {
  return (
    <div className="static ">
      <div className="w-screen absolute">
        <div className="p-3" style={{ background: "#2563eb" }}>
          <p className="invisible">Let it be something</p>
          <p className="invisible">Let it be something</p>
          <p className="invisible">Let it be something</p>
          <p className="invisible">Let it be something</p>
          <p className="invisible">Let it be something</p>
          <p className="invisible">Let it be something</p>
          <p className="invisible">Let it be something</p>
        </div>
        <img alt="" src="./svgs/waves.svg" />
      </div>
      <div className="md:flex w-screen absolute p-2 ">
        <div className="h-1/2">
          <PhotoSlider length={4} />
        </div>
        <div className="md:w-1/2 text-center my-auto">
          <div className="text-3xl	 font-extrabold	md:text-white">
            Let it be X Foundation
          </div>
          <div className="text-xl p-2 font-bold	md:text-white">
            Empowering Changemakers: Build a Brighter Future, One Project at a
            Time
          </div>
          <div className="p-2 text-lg font-medium	md:text-white">
            Connect with passionate individuals and organizations tackling the
            world's toughest challenges. Find funding, collaborate, and make a
            real difference.
          </div>

          <div className="p-3">
            <a
              href="/getinvolved"
              className="hover:bg-blue-500 rounded-xl bg-blue-400 p-3 md:text-white font-bold"
            >
              Join the Movement
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function CoreValues() {
  return (
    <>
      <div className="text-3xl text-blue-900 font-extrabold text-center">
        Our Core Values
      </div>
      <div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-3">
          <div className="p-2">
            <p className="text-xl text-blue-700 font-extrabold text-center p-2">
              Compassion and Empathy
            </p>
            <img
              alt=""
              style={{ borderRadius: "10%" }}
              src="./images/landingImage1.jpeg"
            />
            <p className="text-center p-2">
              NGOs driven by compassion and empathy prioritize understanding and
              responding to the needs of those they serve. They act with
              kindness, care, and understanding, striving to alleviate suffering
              and promote well-being.
            </p>
          </div>
          <div className="p-2">
            <p className="text-xl text-blue-700 font-extrabold text-center p-2">
              Integrity and Accountability
            </p>
            <img
              alt=""
              style={{ borderRadius: "10%" }}
              src="./images/landingImage2.jpeg"
            />
            <p className="text-center p-2">
              NGOs that value integrity and accountability uphold ethical
              standards, transparency, and responsible use of resources. They
              build trust with donors, partners, and beneficiaries by
              demonstrating responsible and honest conduct.
            </p>
          </div>
          <div className="p-2">
            <p className="text-xl text-blue-700 font-extrabold text-center p-2">
              Social Justice and Equality
            </p>
            <img
              className="p-2"
              alt=""
              style={{ borderRadius: "10%" }}
              src="./images/landingImage3.jpeg"
            />
            <p className="text-center p-2">
              NGOs committed to social justice and equality advocate for fair
              and equitable treatment of all individuals and communities. They
              challenge discrimination, promote human rights, and work to create
              a more just and equitable world.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function Achievements() {
  return (
    <>
      <div className="text-3xl text-blue-900 font-extrabold text-center">
        Our Achievements
      </div>
      <div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-3">
          <div className="p-2">
            <p className="text-xl text-blue-700 font-extrabold text-center p-2">
              Pratham Education Foundation (India)
            </p>
            <img
              alt=""
              style={{ borderRadius: "10%" }}
              src="./images/landingImage1.jpeg"
            />
            <p className="text-center p-2">
              Increased literacy rates in tribal communities by 50% through
              innovative, child-centered teaching methods.
            </p>
          </div>
          <div className="p-2">
            <p className="text-xl text-blue-700 font-extrabold text-center p-2">
              Room to Read (Global)
            </p>
            <img
              alt=""
              style={{ borderRadius: "10%" }}
              src="./images/landingImage2.jpeg"
            />
            <p className="text-center p-2">
              Built 25,000 libraries in 14 developing countries, providing
              access to books and educational resources for over 10 million
              children.
            </p>
          </div>
          <div className="p-2">
            <p className="text-xl text-blue-700 font-extrabold text-center p-2">
              Sightsavers (Global)
            </p>
            <img
              className="p-2"
              alt=""
              style={{ borderRadius: "10%" }}
              src="./images/landingImage3.jpeg"
            />
            <p className="text-center p-2">
              Restored sight to 5 million people in developing countries,
              preventing blindness and improving quality of life.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function LandingPage() {
  return (
    <>
      <HeadLine />
      <div className="lg:mt-[500px] md:mt-[400px] mt-[600px]">
        <CoreValues />
        <Achievements />
      </div>
    </>
  );
}

export default LandingPage;
