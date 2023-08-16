// eslint-disable-next-line react/prop-types
const CardSkill = ({item, onMouseEnter, onMouseLeave}) => {

    return(
        <div className="w-[120px] h-[120px] bg-[#1E1E1E] rounded-[10px] flex justify-center items-center md:w-[60px] md:h-[60px] hover:scale-125 ease-out duration-300" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <i className="text-[80px] text-[#00B3FF] md:text-[40px] xl">{item}</i>
        </div>
    )
}

export default CardSkill