import Card from "../components/Card";

const allEvents = [
  {
    type: "Workshop",
    name: "Empowering Youth Voices: Advocacy Workshop for Teens",
    date: "February 25th, 2024",
    registration: "Free, register by February 15th ",
    description:
      "In this interactive workshop, teens will learn how to identify local issues, develop advocacy strategies, and effectively communicate their concerns to decision-makers. Topics covered include public speaking, social media outreach, letter-writing, and campaign planning. This workshop is perfect for passionate teens who want to make a difference in their communities.",
  },
  {
    type: "Workshop",
    name: "Sustainable Living Essentials: A Green Living Skills Workshop",
    date: "March 10th, 2024",
    registration: "$20, register by March 3rd ",
    description:
      "Learn practical tips and tricks for reducing your environmental footprint and living a more sustainable lifestyle. This workshop will cover topics like composting, waste reduction, energy efficiency, eco-friendly cleaning products, and sustainable gardening. Open to individuals and families of all ages interested in making a positive change for the planet.",
  },
  {
    type: "Webinar",
    name: "The Power of Storytelling: Using Narrative to Advocate for Change",
    date: "April 5th, 2024",
    registration: "Free, register by April 1st ",
    description:
      "Join renowned activist and storyteller [Speaker Name] for a powerful webinar on the importance of storytelling in social change movements. Learn how to leverage personal narratives, craft compelling messages, and use your voice to advocate for the causes you care about. A must-attend for anyone who wants to use their story to make a difference.",
  },
  {
    type: "Panel Discussion",
    name: "Building Bridges: Understanding and Addressing Food Insecurity",
    date: "May 1st, 2024",
    registration: "Free, register by April 20th ",
    description:
      "This panel discussion will bring together community leaders, hunger specialists, and individuals experiencing food insecurity to discuss the complex issue of food insecurity. Attendees will gain insights into the challenges faced by vulnerable communities, learn about relevant initiatives, and discover ways to get involved in the fight against hunger.",
  },
  {
    type: "Online Retreat",
    name: "Cultivating Compassion: Mindfulness and Social Justice",
    date: "June 15th - 17th, 2024",
    registration: "$50, register by June 1st ",
    description:
      "This three-day virtual retreat invites you to explore the intersection of mindfulness and social justice. Through guided meditations, reflective exercises, and interactive sessions, participants will cultivate compassion, connect with their purpose, and learn how to embody mindful activism in their daily lives. Ideal for individuals seeking personal growth and ways to contribute to positive social change.",
  },
  {
    type: "Workshop",
    name: "From Seed to Table: Hands-on Urban Gardening Workshop",
    date: "August 12th, 2024",
    registration: "Free, register by August 5th ",
    description:
      "Get your hands dirty and learn how to grow your own food in this fun and interactive workshop! Families will explore the basics of urban gardening, from seed selection to harvesting, and build their own miniature raised garden beds to take home. Ideal for adults and children of all ages to discover the joy and benefits of growing their own food.",
  },
  {
    type: "Coding Camp",
    name: "Tech for Good: Coding Camp for Young Changemakers",
    date: "July 10th-14th, 2024",
    registration: "$150, register by June 10th",
    description:
      "Empower teens to be agents of change with this inspiring coding camp! Participants will learn valuable coding skills and work together to develop technology solutions for real-world issues like environmental protection, social justice, and education access. No prior coding experience necessary!",
  },
  {
    type: "Workshop",
    name: "The Art of Peacebuilding: Conflict Resolution Workshop (Community-based)",
    date: "September 30th, 2024",
    registration: "Free, register by September 20th",
    description:
      "This practical workshop equips participants with essential skills for navigating conflict constructively. Learn effective communication techniques, active listening strategies, and tools for mediation and collaboration. Open to individuals interested in fostering peace and understanding in their communities.",
  },
  // {
  //   type: "",
  //   name: "",
  //   date: "",
  //   registration: "",
  //   description: "",
  // },
];

function Events() {
  return (
    <div>
      {" "}
      <div className="text-3xl text-blue-900 font-extrabold text-center">
        Upcoming Events & Workshops
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 p-3">
        {/* heading,
  subheading,
  src,
  headingsize = "p-2 text-xl font-bold",
  subheadingsize = "p-2 text-lg font-bold",
  date, */}
        {allEvents.map((event) => (
          <Card
            heading={event.name}
            subheading={event.type}
            src="./images/nature.jpeg"
            date={event.date}
            subheadingsize="text-center text-lg"
            registration={event.registration}
          />
        ))}
      </div>
    </div>
  );
}

export default Events;
