import Blog from "../components/Blog";

function BlogPage() {
  return (
    <div>
      <div className="text-3xl text-blue-900 font-extrabold text-center">
        Blogs
      </div>
      <div className="p-2"></div>
      <div className="grid md:grid-cols-4 grid-cols-3 gap-4 p-3">
        <Blog
          src="./images/landingImage1.jpeg"
          heading={"Heading"}
          subheading={"SubHeading"}
        />
        <Blog
          heading={"Heading"}
          subheading={"SubHeading"}
          src="./images/landingImage2.jpeg"
        />
        <Blog
          heading={"Heading"}
          subheading={"SubHeading"}
          src="./images/landingImage3.jpeg"
        />
        <Blog
          heading={"Heading"}
          subheading={"SubHeading"}
          src="./images/landingImage4.jpeg"
        />
        <Blog
          heading={"Heading"}
          subheading={"SubHeading"}
          src="./images/landingImage3.jpeg"
        />
      </div>
    </div>
  );
}

export default BlogPage;
