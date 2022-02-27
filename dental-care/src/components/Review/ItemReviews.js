function ItemReviews({dataItem}) {
    const {name, position, content, image} = dataItem
    return (
        <>
            <div className="box">
                <img src={`../assets/images/${image}`} alt="" />
                <p>{content}</p>
                <div className="stars">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-half-alt" />
                </div>
                <h3>{name}</h3>
                <span>{position}</span>
            </div>
        </>
    )
}

export default ItemReviews