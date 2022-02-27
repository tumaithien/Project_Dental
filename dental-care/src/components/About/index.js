function About() {
    return (
        <>
            {/* about section start */}
            <section className="about" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 image">
                            <img src="../assets/images/about-img.jpg" className="w-100 mb-5 mb-md-0" alt="" />
                        </div>
                        <div className="col-md-6 content">
                            <span>about us</span>
                            <h3>True Healthcare For Your Family</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro vitae enim magni natus officia molestiae assumenda accusantium incidunt officiis reiciendis!</p>
                            <a href="#contact" className="link-btn">make pointment</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* about section ends */}
        </>
    )
}
export default About