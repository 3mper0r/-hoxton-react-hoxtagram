function Card_section(props) {
    return <>

        <h2 className="title">{props.image.title}</h2>
        <img src={props.image.image} className="image" />
    </>


}

export default Card_section