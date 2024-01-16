import { useState } from "react";
import Card from "../components/Card";
import OverLay from "../components/OverLay";

const blogs = [
  {
    name: "Unmasking Poverty: Beyond Statistics, Uncovering the Human Stories ",
    subheading:
      "From Faces to Figures: Unveiling the Lived Experiences of Poverty",
    src: "",
    description:
      "Data and statistics offer a glimpse into the scope of poverty, but they often fail to capture the human dimension. This blog post takes you beyond the numbers, sharing the poignant stories of individuals and families grappling with poverty in all its complexities. Through their firsthand accounts, we explore the daily struggles, hopes, and resilience of those navigating this challenging reality. By putting faces to the figures, we aim to foster empathy, understanding, and a call to action towards meaningful solutions.",
  },
  {
    name: "Climate Action Beyond Borders: Collaborative Solutions for a Sustainable Future",
    subheading:
      "Building Bridges, Not Walls: International Cooperation in the Fight Against Climate Change",
    src: "",
    description:
      "Climate change transcends national boundaries, requiring global solidarity and innovative solutions. This blog post highlights your NGO's collaborative efforts with communities and organizations across borders. We showcase how cross-cultural partnerships are driving positive change, from sharing sustainable farming practices to advocating for climate-friendly policies. By emphasizing the power of international cooperation, we inspire readers to think beyond their own communities and join the collective fight for a healthier planet.",
  },
  {
    name: "From Despair to Dreamers: Empowering Refugees to Rebuild Their Lives",
    subheading:
      "Rekindling Hope, Fostering Opportunity: Stories of Resilience and Resurgence",
    src: "",
    description:
      "Uprooted from their homes and facing profound uncertainties, refugees often endure immense hardship. This blog post focuses on your NGO's role in rekindling hope and empowering refugees to rebuild their lives. We share inspiring stories of individuals who, with your support, have gained access to education, skills training, and opportunities to contribute to their new communities. By celebrating their resilience and resourcefulness, we encourage readers to support initiatives that offer refuge, rebuild dreams, and ignite a brighter future for displaced individuals.",
  },
  {
    name: "Tech Transformers: Harnessing Technology to Bridge the Educational Gap",
    subheading:
      "Closing the Divide, One App at a Time: How Innovative Solutions are Expanding Access to Learning",
    src: "",
    description:
      "The digital revolution has the potential to democratize education and bridge the gap for underprivileged communities. This blog post spotlights your NGO's innovative tech-driven initiatives that bring quality education to underserved regions. We showcase how interactive apps, online platforms, and digital learning tools are empowering children and adults to acquire knowledge and skills, paving the way for brighter futures. By highlighting the transformative power of technology in education, we inspire readers to support your mission and invest in bridging the digital divide.",
  },
  {
    name: "Beyond the Classroom Walls: Nurturing Environmental Champions Through Immersive Learning",
    subheading:
      "Nature as Teacher, Community as Classroom: Experiential Education Ignites a Passion for the Planet",
    src: "",
    description:
      "Traditional classrooms sometimes fall short in fostering a deep connection with the environment. This blog post champions your NGO's approach to environmental education through immersive experiences. We highlight your outdoor programs, nature walks, and community engagement initiatives that allow participants to directly connect with nature, learn about its delicate balance, and develop a sense of responsibility to protect it. By showcasing the power of experiential learning, we inspire readers to support your efforts in nurturing future environmental stewards.",
  },
  {
    name: "Healthcare for All: Building Bridges to Accessible and Equitable Medical Care",
    subheading:
      "Beyond Borders, Beyond Barriers: Expanding Access to Life-Saving Services",
    src: "",
    description:
      "Access to quality healthcare should be a universal right, yet many lack basic medical services due to geographical, financial, or societal barriers. This blog post sheds light on your NGO's efforts in breaking down these barriers and ensuring healthcare for all. We showcase your mobile clinics, community health awareness initiatives, and advocacy campaigns that reach marginalized communities and provide life-saving services. By highlighting the disparities in healthcare access and your vital role in bridging them, we inspire readers to support your mission and advocate for health equity.",
  },
  {
    name: "Breaking the Cycle: From Victims to Advocates, Ending Gender-Based Violence",
    subheading:
      "Empowering Voices, Shattering Silence: Supporting Survivors and Promoting Systemic Change",
    src: "",
    description:
      "Gender-based violence is a global pandemic, silencing voices and shattering lives. This blog post shines a light on your NGO's work in supporting survivors, amplifying their voices, and advocating for systemic change. We share powerful stories of resilience and resistance, showcasing how your programs provide survivors with counseling, legal support, and skills training to reclaim their lives and become advocates for themselves and others. By amplifying these voices and urging readers to stand against injustice, we encourage action and support for initiatives that end violence and empower communities.",
  },
  // {
  //   name: "",
  //   subheading: "",
  //   src: "",
  //   description: "",
  // },
];

function BlogPage() {
  const [overLayText, setOverLayText] = useState("");
  return (
    <>
      {overLayText !== "" && (
        <OverLay overLayText={overLayText} setOverLayText={setOverLayText} />
      )}
      <div className={overLayText !== "" && "opacity-[.10]"}>
        <div className="text-3xl text-blue-900 font-extrabold text-center">
          Blogs
        </div>
        <div className="p-2"></div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 p-3">
          {blogs.map((blog, index) => {
            return (
              <button onClick={() => setOverLayText(blog)}>
                <Card
                  headingsize="p-2 text-xl font-bold truncate"
                  subheadingsize="p-2 text-lg font-bold truncate"
                  src={`./images/landingImage${(index % 4) + 1}.jpeg`}
                  heading={blog.name}
                  subheading={blog.subheading}
                />
              </button>
            );
          })}
          {/* <button>
            <Card
              src="./images/landingImage1.jpeg"
              heading={"Hands that Heal"}
              subheading={"How Volunteers are Building a Brighter Future "}
            />
          </button> */}
          {/* <Card
            heading={"From Despair to Hope"}
            subheading={"A Young Girl's Journey Out of Poverty"}
            src="./images/landingImage2.jpeg"
          />
          <Card
            heading={"Every Drop Counts"}
            subheading={"How Your Support Creates a Wave of Change"}
            src="./images/landingImage3.jpeg"
          />
          <Card
            heading={"From Awareness to Action"}
            subheading={"5 Ways You Can Support Our Mission Today"}
            src="./images/landingImage4.jpeg"
          />
          <Card
            heading={"From the Field to the Office"}
            subheading={"A Glimpse into the Heart of Our Work"}
            src="./images/landingImage3.jpeg"
          /> */}
        </div>
      </div>
    </>
  );
}

export default BlogPage;
