import { Layout } from "./components/Layout"
import Brands from "./components/sections/Brands"
import Hero from "./components/sections/Hero"

export default function App() {
  console.log('abc')
  return <Layout title="EdgeWeb">
    <Hero />
    <Brands />
  </Layout>
}