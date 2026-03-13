import { Layout } from "./components/Layout"
import About from "./components/sections/About"
import Brands from "./components/sections/Brands"
import Hero from "./components/sections/Hero"
import Service from "./components/sections/Service"

export default function App() {
  console.log('abc')
  return <Layout title="EdgeWeb">
    <Hero />
    <Brands />
    <Service />
    <About />
    <div className="w-full h-48 bg-violet-500"></div>
  </Layout>
}