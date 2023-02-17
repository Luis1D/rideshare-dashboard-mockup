const UserCard = () => {
    return <div id="UserCard">
        <div className="container">
            <img src="./calendar.png" alt="calendar" className="icon"/>
            <img src="./notification.png" alt="notification" className="icon"/>
            <div className="rating">
                <img src="./star.png" alt="rating" />
                <span>4.9</span>
            </div>
            <img src="./me.jpg" alt="user photo" className="user-photo"/>
        </div>
    </div>
}

export default UserCard;