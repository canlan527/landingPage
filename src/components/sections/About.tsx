import AboutCard from "../cards/AboutCard";
import Container from "../shared/Container";
import Paragraph from "../shared/Paragraph";
import Title from "../shared/Title";

export default function About() {
  return (
    <section id="about-us">
      <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">
        <div className="w-full md:w-5/12 lg:w-1/2">
          <div className="w-full h-80 sm:h-96 relative">
            <img src="https://i.pinimg.com/1200x/68/a9/d5/68a9d560a790566204a15fa7039ae085.jpg" alt="about-us" className="w-full h-full object-cover rounded-3xl  shadow-lg relative z-10" />
          </div>
        </div>
        <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col">
          <Title>About Our AI Solution </Title>
          <Paragraph className="text-gray-600 mt-4">
            Our AI solution is designed to help businesses leverage the power of machine learning and data analytics to make informed decisions, automate processes, and enhance customer experiences. With a focus on cutting-edge technology and user-centric design, we aim to empower organizations to thrive in the digital age.
          </Paragraph>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 mt-8 max-w-3xl">
            <AboutCard title="Mission" description="To revolutionize the way businesses interact with data and technology.">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </AboutCard>
            <AboutCard
              title="Vision"
              description="Our vision is to drive business innovation and growth."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </AboutCard>
          </div>
        </div>
      </Container>
    </section>
  )
}