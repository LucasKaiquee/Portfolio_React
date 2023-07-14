// eslint-disable-next-line react/prop-types
const ButtonRedes = ({urlLink, nameRede, classButton}) => {

    return (
        <a href={urlLink} target="_blanck" className={classButton}>{nameRede}</a>
    )
}

export default ButtonRedes