import Container from "../shared/Container"
import Paragraph from "../shared/Paragraph"

export default function CTA() {
  return (
    <section id="cta" className="py-20">
      <Container>
        <div className="text-center">
          <h1 className="text-6xl font-bold text-heading-1 mb-4">
            Quick Start you <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-600 to-violet-600">own AI</span> Business
          </h1>
          <Paragraph className="my-12">
            Leverage our AI-powered tools and expert support to quickly launch and grow your AI-driven business. To startup or an established company, we provide the resources and guidance you need to succeed in the AI landscape.
          </Paragraph>
          <button className="bg-violet-600 hover:bg-violet-700 text-heading-1 font-bold py-3 px-6 rounded-full cursor-pointer transition-colors duration-300">
            Get In Touch
          </button>
        </div>
      </Container>
    </section>
  )
}
