import {useSelector} from 'react-redux'
import ItemComponents from '../ItemComponents'

function Servicespage() {
  const dataList = useSelector(state => state.listOurService)
    return(
        <>
        <section className="services" id="services">
          <h2 className="heading">our services</h2>
          <div className="box-container container">
            {
              dataList.map(dataItem => {
                  return <ItemComponents key={dataItem.id} dataItem={dataItem} />
              })
            }
            
          </div>
        </section>
        </>
    )
}

export default Servicespage