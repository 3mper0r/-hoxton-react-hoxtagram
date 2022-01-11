function Likes_section(props) {
    return <>
        <span className="likes">{props.image.likes}</span>
        <button className="like-button"
            onClick={() => {
                props.likeImage(props.image)
            }}>♥</button>
    </>
}

export default Likes_section