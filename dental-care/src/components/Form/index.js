function Form() {
    return (
        <>
            {/* contact section start */}
            <section className="contact" id="contact">
                <h2 className="heading">make apointment</h2>
                <form action method="post">
                    <span>your name:</span>
                    <input type="text" name="name" placeholder="Enter your name" className="box" />
                    <span>your email:</span>
                    <input type="email" name="email" placeholder="Enter your email" className="box" />
                    <span>your number:</span>
                    <input type="number" name="number" placeholder="Enter your number" className="box" />
                    <span>appointment date:</span>
                    <input type="datetime-local" name="date" className="box" />
                    <input type="submit" defaultValue="make appointment" className="link-btn" />
                </form>
            </section>
            {/* contact section end */}
        </>
    )
}

export default Form