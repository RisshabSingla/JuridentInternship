import Card from "../components/Card";

function BlogPage() {
  return (
    <div>
      <div className="text-3xl text-blue-900 font-extrabold text-center">
        Blogs
      </div>
      <div className="p-2"></div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 p-3">
        <Card
          src="./images/landingImage1.jpeg"
          heading={"Hands that Heal"}
          subheading={"How Volunteers are Building a Brighter Future "}
        />
        <Card
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
        />
      </div>
    </div>
  );
}

export default BlogPage;
