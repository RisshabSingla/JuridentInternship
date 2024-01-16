function Card({
  heading,
  subheading,
  src,
  headingsize = "p-2 text-xl font-bold",
  subheadingsize = "p-2 text-lg font-bold",
  date,
  registration,
}) {
  return (
    <div className="border-4 p-2 ">
      <div>
        <img className="max-h-[200px] w-full" src={src} alt="" />
      </div>
      <p className={`${headingsize} `}>{heading}</p>
      <p className={`${subheadingsize}`}>{subheading}</p>
      {date && (
        <div className="m-2 text-center">
          <span className=" rounded-xl p-2 bg-slate-300"> {date}</span>
        </div>
      )}
      {registration && (
        <div className="m-2 text-center">
          <p className=" rounded-xl p-2 bg-slate-300"> {registration}</p>
        </div>
      )}
    </div>
  );
}

export default Card;
