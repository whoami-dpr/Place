import Card from "./Card"

const cards = [
    {
        title: "Busca", 
        description: "Busca y compara precios en miles de estacionamientos Argentinos.", 
        img: "images/search.svg"
    },
    {
        title: "Reserva", 
        description: "Paga de forma segura y recibi por email el ticket con el pase.", 
        img: "images/phone.svg"
    },
    {
        title: "Llega", 
        description: "Mostras tu e-ticket y listo, no necesitas nada mas, facil y rapido.", 
        img: "images/car.svg"
    },
]

const SectionPlace = () => {
  return (
    <section className='py-20'>
        <h3 className='text-[26px] text-center font-bold'>
            ¿Como funciona Place?
        </h3>
        
        <div className='grid grid-cols-1 sm:grid-cols-3 justify-center'>
            {cards.map(card => (
                <Card 
                    key={card.title}
                    title={card.title} 
                    description={card.description} 
                    img={card.img} 
                />
            ))}
        </div>
    </section>
  )
}

export default SectionPlace
