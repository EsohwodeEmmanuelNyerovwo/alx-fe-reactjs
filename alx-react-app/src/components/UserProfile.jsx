function UserProfile(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Age: {props.bio}</p>
        </div>
    )
}

export default UserProfile;