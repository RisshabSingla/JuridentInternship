import { PhotoSlider } from "../components/PhotoSlider";

function AboutUs() {
  return (
    <div>
      <div className="text-3xl text-blue-900 font-extrabold text-center">
        {" "}
        Welcome to our Organizaion
      </div>
      {/* <div className="p-2 text-2xl text-blue-800 font-bold text-center">
        {" "}
        Your Compassionate Changemakers
      </div> */}
      <div className="p-3 md:flex">
        <div className="md:w-1/2">
          <PhotoSlider length={4} />
        </div>
        <div className="text-center md:w-1/2">
          <p className="p-2 text-xl font-bold">
            Build a Brighter Future, One Project at a Time
          </p>
          <p className="p-2 font-bold">
            Bridging the Gap, One Helping Hand at a Time
          </p>
          <p className="p-2">
            We are a purpose-driven community dedicated to tackling children
            education. Through transformative programs and unwavering
            compassion, we empower individuals and communities to thrive and
            build a brighter future for all.
          </p>
          <p className="p-2">
            In [Year], driven by a deep-seated concern for [Problem your NGO
            addresses], [Founder's name(s)] embarked on a mission to make a
            difference. From humble beginnings in [Location], we've grown into a
            vibrant network of passionate individuals and organizations united
            by a single goal: to create a world where [desired outcome] is a
            reality for everyone. Over the years, we've faced challenges and
            setbacks, but our unwavering commitment to our cause has fueled our
            success. We've witnessed firsthand the transformative power of [Your
            key programs] and the ripple effect of hope they create within
            communities.
          </p>
        </div>
      </div>

      <div className="text-center">
        <p className="text-blue-900 p-2 text-3xl font-extrabold">Our Vision </p>
        <div className="w-full md:flex">
          <div className="md:w-1/2 p-3">
            <p className="p-2 text-2xl font-extrabold">
              A world where education is not just a dream, but a lived
              experience for all.
            </p>
            <p className="p-2">
              Our vision is a world where every child, regardless of
              circumstance, unlocks their full potential through a
              transformative education. We see classrooms brimming with
              curiosity, laughter, and critical thinking, where diverse voices
              are celebrated and ignited by passionate educators. We imagine
              communities empowered by knowledge, capable of tackling challenges
              and shaping a brighter future. Beyond textbooks and tests, we
              envision education as a bridge to opportunity, building
              resilience, empathy, and responsible global citizens. In this
              world, education is not a privilege, but a birthright, and every
              child holds the key to writing their own extraordinary story. This
              is the dream we chase, the future we build, brick by brick,
              student by student, together.
            </p>
          </div>
          <div className="md:w-1/2 p-3">
            {" "}
            <PhotoSlider length={4} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
