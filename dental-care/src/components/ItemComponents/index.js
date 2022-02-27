function ItemComponents({dataItem}) {
    const {title, image, summary} = dataItem
    return (
        <>
            <div className="box">
                <img src={`./assets/images/${image}`} alt="" />
                <h3>{title}</h3>
                <p>{summary}</p>
            </div>
        </>
    )
}
export default ItemComponents