function Blog({ heading, subheading, src }) {
  return (
    <div className="border-4">
      <div>
        <img className="max-h-[200px] w-full" src={src} alt="" />
      </div>
      <p className="p-2 text-xl font-bold">{heading}</p>
      <p className="p-2 text-xl font-bold">{subheading}</p>
    </div>
  );
}

export default Blog;
