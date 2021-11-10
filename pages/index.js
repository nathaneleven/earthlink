import Header from '../src/components/molecules/Header'
import Footer from '../src/components/molecules/Footer'
import Hero from '../src/components/organisms/Hero'
import Cta from '../src/components/organisms/Cta'
import Plans from '../src/components/organisms/Plans'
import About from '../src/components/organisms/About'
import Advantages from '../src/components/organisms/Advantages'
import SaferInfo from '../src/components/organisms/SaferInfo'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Cta />
      <Plans/>
      <About/>
      <Advantages/>
      <SaferInfo/>
      <Footer/>
    </div>
  )
}
