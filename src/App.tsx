import { Layout } from "./components/Layout"
import About from "./components/sections/About"
import Brands from "./components/sections/Brands"
import CTA from "./components/sections/CallToAction"
import Hero from "./components/sections/Hero"
import Price from "./components/sections/Price"
import Service from "./components/sections/Service"

export default function App() {
  console.log('abc')
  return <Layout title="EdgeWeb">
    <Hero />
    <Brands />
    <Service />
    <About />
    <Price />
    <CTA />
    <div className="w-full h-48 bg-violet-500"></div>
  </Layout>
}