function GetInvolved() {
  return (
    <div>
      <div className="text-3xl text-blue-900 font-extrabold text-center">
        Get Involved
      </div>
      <div className="p-3 md:flex text-center">
        <div className="md:w-1/2">
          <p className="p-2 text-2xl font-bold">Volunteer</p>
          <p className=" text-xl font-bold">Share Your Time and Talents.</p>
          <p className="p-2">
            {" "}
            Make a hands-on impact by volunteering with [NGO Name]. We have a
            variety of opportunities to fit your skills and interests,
          </p>
          <div className="p-3 flex flex-col justify-center items-center ">
            <form
              action="https://usebasin.com/f/4638f0336942"
              method="POST"
              className="flex flex-col w-5/6"
            >
              <input
                type="text"
                placeholder="Enter your Name"
                className="p-2 m-2  rounded-md border-2 bg-transparent "
              ></input>
              <input
                type="text"
                placeholder="Enter your Email"
                className="p-2  m-2 rounded-md border-2 bg-transparent "
              ></input>
              <input
                type="number"
                placeholder="Enter your Mobile Number"
                className="p-2  m-2 rounded-md border-2 bg-transparent "
              ></input>
              <textarea
                name="message"
                rows={4}
                placeholder="Please enter how would you like to help out NGO"
                className=" rounded-md m-2 border-2 bg-transparent  p-2 text-xl"
              ></textarea>
              <center>
                <button className="  pl-3 pr-3 h-10 text-xl text-white font-bold rounded-lg bg-red-400 hover:text-cyan-300 hover:bg-orange-700 m-4 hover:scale-110 duration-100 ">
                  Submit
                </button>
              </center>
            </form>
          </div>
        </div>
        <div className="md:w-1/2">
          <p className="p-2 text-2xl font-bold">Donate</p>
          <p className=" text-xl font-bold">
            Invest in Change. Your Support Makes a Difference.
          </p>
          <p className="p-2">
            {" "}
            Every contribution, big or small, helps us [explain how donations
            support your mission]. Donate now and be a part of the solution.
          </p>
          {/* <p className=" text-xl font-bold">
            {" "}
            Every ripple starts with a drop: Fuel the wave of change with your
            support.
          </p>
          <p>
            {" "}
            Imagine a world where [insert the positive change your NGO strives
            for]. A world where [elaborate on the specific impact your NGO
            makes]. This isn't just a dream; it's the future we're building,
            brick by brick, with the help of passionate supporters like you.
          </p> */}
          <div className="p-3 flex flex-col justify-center items-center ">
            <form
              action="https://usebasin.com/f/4638f0336942"
              method="POST"
              className="flex flex-col w-5/6"
            >
              <input
                type="text"
                placeholder="Enter your Name"
                className="p-2 m-2  rounded-md border-2 bg-transparent "
              ></input>
              <input
                type="text"
                placeholder="Enter your Email"
                className="p-2  m-2 rounded-md border-2 bg-transparent "
              ></input>
              <input
                type="number"
                placeholder="Enter your Mobile Number"
                className="p-2  m-2 rounded-md border-2 bg-transparent "
              ></input>
              <textarea
                name="message"
                rows={2}
                placeholder="Your message for the NGO"
                className=" rounded-md m-2 border-2 bg-transparent p-2 text-lg"
              ></textarea>
              <input
                type="number"
                placeholder="Enter the amount you want to donate"
                className="p-2  m-2 rounded-md border-2 bg-transparent "
              ></input>
              <center>
                <button className="  pl-3 pr-3 h-10 text-xl text-white font-bold rounded-lg bg-red-400 hover:text-cyan-300 hover:bg-orange-700 m-4 hover:scale-110 duration-100 ">
                  Submit
                </button>
              </center>
            </form>
          </div>
          <div className="m-2 p-2"></div>
        </div>
      </div>
    </div>
  );
}

export default GetInvolved;
