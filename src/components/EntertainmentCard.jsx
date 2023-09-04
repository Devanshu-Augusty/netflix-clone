
const EntertainmentCard = ({ index, imgURL, title, content }) => {
  return (
    <div className={`flex justify-center gap-2 items-center
    flex-1 px-32 py-20 text-white bg-black w-full 
    border-b-8 border-lightBlack
    ${index & 1 ? 'flex-row-reverse' : 'flex-row'}
    max-lg:flex-col max-lg:text-center max-lg:gap-8
    max-lg:px-11 max-sm:px-2`}>
        <div className="flex flex-1 flex-col justify-center
        items-start max-lg:items-center">
            <h3 className="text-5xl font-bold leading-normal
            mb-3 max-lg:text-4xl max-lg:font-semibold 
            max-sm:text-3xl">
              {title}
            </h3>
            <p className="text-2xl max-lg:text-[16px]
            leading-normal">
              {content}
            </p>
        </div>
        <img src={imgURL} alt="image"
        className="w-[600px] max-sm:w-[500px]" />
    </div>
  )
}

export default EntertainmentCard;