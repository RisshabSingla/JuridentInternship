import { PhotoSlider } from "../components/PhotoSlider";

function MissionPage() {
  return (
    <div>
      <div className="text-3xl text-blue-900 font-extrabold text-center">
        Our Mission
      </div>
      <div className="p-2 text-xl font-bold text-center">
        {" "}
        Spark the flame of learning in every child, regardless of background,
        and illuminate their path to a brighter future.
      </div>
      <div className="md:flex">
        <div className="md:w-1/2 p-2">
          <PhotoSlider length={4} />
        </div>
        <div className="md:w-1/2 pr-4">
          In the shadowed corners of inequity, where opportunity seems like a
          distant constellation, we see a different picture. We see classrooms
          brimming with potential, classrooms where every child, regardless of
          the zip code they were born into, holds within them a spark waiting to
          ignite. That spark, that insatiable curiosity, that yearning to learn
          and grow, is the sun we chase at [NGO name]. We are the builders of
          lighthouses, guiding beacons that break through the darkness with the
          vibrant beams of education. We illuminate forgotten paths, pave them
          with knowledge, and nurture the flames of young minds with open arms
          and open classrooms. We believe that within each child, in every
          corner of the world, lies a brilliance ready to bloom. Whether
          burdened by poverty, discrimination, or circumstance, their thirst for
          understanding is a universal language we speak fluently. We bridge the
          gaps of inequality, dismantle the walls of ignorance, and empower them
          to write their own narratives, filled with the vibrant colors of
          discovery and the incandescent glow of achievement. Join us in this
          sacred mission, fellow lightbearers. Let's create a world bathed in
          the radiance of every child's potential, a world where the shadows
          shrink and the horizons forever expand, ignited by the unyielding
          flames of education.
        </div>
      </div>
    </div>
  );
}

export default MissionPage;
