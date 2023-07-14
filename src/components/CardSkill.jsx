// eslint-disable-next-line react/prop-types
const CardSkill = ({item}) => {
    return(
        <div className="w-[150px] h-[150px] bg-[#1E1E1E] rounded-[10px] flex justify-center items-center">
            <i className="text-[90px] text-[#00B3FF]">{item}</i>
        </div>
    )
}

export default CardSkill