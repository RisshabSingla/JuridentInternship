import useScreenSize from "../utils/useScreenSize";

function ContactUs() {
  const screen = useScreenSize();
  return (
    <div>
      <div className="p-3 text-3xl text-blue-900 font-extrabold text-center">
        Contact Us
      </div>
      <div className="w-screen md:flex">
        <div className="md:w-1/2">
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
              <textarea
                name="message"
                rows={10}
                placeholder="Enter your Query"
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
        <div className=" md:w-1/2">
          <div className="p-2">
            <p> Address: Tiruvalam Rd, Katpadi, Vellore, Tamil Nadu 632014</p>
            <p>Phone: 044 4627 7555</p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.040998284477!2d79.15335867506292!3d12.969228414930324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad479f0ccbe067%3A0xfef222e5f36ecdeb!2sVellore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1705324748852!5m2!1sen!2sin"
            width={Math.min(600, screen.width - 20)}
            height="400"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
