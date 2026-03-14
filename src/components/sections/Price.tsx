import Container from "../shared/Container"
import Paragraph from "../shared/Paragraph"
import Title from "../shared/Title"
import { pricingPlans } from "../../utils/pricing-plan"

export default function Price() {
  return (
    <section id="price">
      <Container className="text-center">
        <Title>Pricing</Title>
        <Paragraph className="mt-4 mb-12">
          Choose the plan that&apos;s right for your business.
        </Paragraph>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, key) => (
            <div key={key} className="relative group h-full ">
              <div className="bg-linear-to-r from-blue-600 to-violet-600 p-1 rounded-3xl h-full">
                <div className="flex flex-col h-full relative bg-box-bg border rounded-3xl shadow-lg p-8">
                  {plan.bestValue && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full bg-linear-to-r from-violet-600 to-violet-600">
                      Best Value
                    </div>
                  )}
                  <h2 className="text-heading-1 text-2xl font-semibold my-4">
                    {plan.title}
                  </h2>
                  <p className="text-heading-1 text-4xl font-semibold my-4">
                    {plan.price}
                  </p>
                  <ul className="text-heading-3 mt-6 flex-1 space-y-3 text-left">
                    {plan.features.map((feature, index) => (
                      <li className="" key={index}>
                        <span className="text-primary">✅</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <button className="w-full text-heading-3 bg-violet-600 hover:bg-violet-700 font-bold py-2 px-4 rounded-3xl transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
