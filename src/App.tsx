import { Layout } from "./components/Layout"
import Brands from "./components/sections/Brands"
import Hero from "./components/sections/Hero"
import Service from "./components/sections/Service"

export default function App() {
  console.log('abc')
  return <Layout title="EdgeWeb">
    <Hero />
    <Brands />
    <Service />
  </Layout>
}