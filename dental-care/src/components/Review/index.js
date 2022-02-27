import { useSelector } from 'react-redux'
import ItemReviews from "./ItemReviews"
function Review() {
    const dataList = useSelector(state => state.listSatisfield)
    return (
        <>
            {/* review section start */}
            <section className="reviews" id="reviews">
                <h2 className="heading">satisfield clients</h2>
                <div className="box-container container">
                    {
                        dataList.map(dataItem => {
                            return <ItemReviews key={dataItem.id} dataItem={dataItem} />
                        })
                    }
                </div>
            </section>
            {/* review section end */}
        </>
    )
}

export default Review