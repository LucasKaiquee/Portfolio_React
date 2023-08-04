// eslint-disable-next-line react/prop-types
const ButtonRedes = ({urlLink, nameRede, classButton}) => {

    return (
        <a href={urlLink} target="_blanck" className={classButton + " hover:scale-125 ease-out duration-300"}>{nameRede}</a>
    )
}

export default ButtonRedes