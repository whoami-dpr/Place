type CardProps = {
    title: string
    description: string
    img: string
}

const Card = ({title, description, img}: CardProps) => {
  return (
    <div className='text-center mt-10'>
        <img className='w-44 h-30 mx-auto bg-contain' src={`/${img}`} alt="" />
        <h4 className='text-[23px] font-semibold'>{title}</h4>
        <p className="px-8">{description}</p>
    </div>
  )
}

export default Card
