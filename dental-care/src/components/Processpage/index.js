import {useSelector} from 'react-redux'
import ItemComponents from '../ItemComponents'
function Processpage() {
    const dataList = useSelector(state => state.listWorkProcess)
    return (
        <>
            {/* process section start */}
            <section className="process">
                <h2 className="heading">work process</h2>
                <div className="box-container container">
                    {
                        dataList.map(dataItem => {
                            return <ItemComponents key={dataItem.id} dataItem={dataItem} />
                        })
                    }
                </div>
            </section>
            {/* process section end */}
        </>
    )
}

export default Processpage