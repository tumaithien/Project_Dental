function Footer() {
    return (
        <>
            {/* footer section start */}
            <section className="footer">
                <div className="box-container container">
                    <div className="box">
                        <i className="fas fa-phone" />
                        <h3>phone number</h3>
                        <p>+84 34 754 1730</p>
                        <p>+84 92 98 3825</p>
                    </div>
                    <div className="box">
                        <i className="fa-solid fa-location-dot" />
                        <h3>our address</h3>
                        <p>1234 Ly Thuong Kiet, Phuong 6, Quan Tan Binh</p>
                    </div>
                    <div className="box">
                        <i className="fas fa-clock" />
                        <h3>opening hours</h3>
                        <p>07:00am to 02:00pm</p>
                    </div>
                    <div className="box">
                        <i className="fas fa-envelope" />
                        <h3>email address</h3>
                        <p>tumaithien@gmail.com</p>
                        <p>tumaithang@gmail.com</p>
                    </div>
                </div>
                <div className="credit">
                    created by <span>Tu Mai Thien</span>
                </div>
            </section>
            {/* footer section end */}
        </>
    )
}

export default Footer