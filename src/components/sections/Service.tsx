import ServiceCard from "../cards/ServiceCard";
import Container from "../shared/Container";
import Paragraph from "../shared/Paragraph";
import Title from "../shared/Title";

import { services } from "../../utils/services-data"

export default function Service() {
  return (
    <div id="services">
      <Container className="space-y-10 md:space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Title>Our AI Serivces</Title>
          <Paragraph>
            We provide a wide range of AI services to help businesses and individuals leverage the power of artificial intelligence. Our services include AI consulting, custom AI development, AI integration, and AI training. 
          </Paragraph>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {
            services.map((item, key) => (
              <ServiceCard
                key={key}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))
          }
        </div>
      </Container>
    </div>
  )
}

