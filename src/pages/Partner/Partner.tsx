import HeroPartner from "@/components/Partner/HeroPartner"
import RegisterCarport from "@/components/Partner/RegisterCarport"
import WhyPlaceSection from "@/components/Partner/WhyPlaceSection"

const Partner = () => {

  return (
    <>
      <section>
        <HeroPartner />
      </section>
      <section>
        <RegisterCarport />
      </section>
      <section>
        <WhyPlaceSection />
      </section>
    </>
  )
}

export default Partner