function Comments_section(props) {
    return (
        <ul className="comments">
            {props.image.comments.map(comment => (
                <li key={comment.id}>{comment.content}</li>
            ))}

        </ul>
    )
}

export default Comments_section