// eslint-disable-next-line react/prop-types
const CardSkill = ({item, onMouseEnter, onMouseLeave}) => {

    return(
        <div className="w-[150px] h-[150px] bg-[#1E1E1E] rounded-[10px] flex justify-center items-center sm:w-[60px] sm:h-[60px] hover:scale-125 ease-out duration-300" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <i className="text-[90px] text-[#00B3FF] sm:text-[40px]">{item}</i>
        </div>
    )
}

export default CardSkill