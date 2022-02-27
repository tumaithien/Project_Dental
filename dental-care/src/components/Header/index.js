import {useEffect, useState} from 'react'
import cls from 'classnames'
function Header() {

    const [scrolled, setScrolled] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    function handleScroll() {
        let offset = window.scrollY;
        if(offset > 0){
            setScrolled(true)
        }else{
            setScrolled(false)
        }
    }
    function handleClickMenu() {
        setShowMenu(!showMenu)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    });
    return (
        <>
            {/* header section start */}
            <header className={cls('header fixed-top', {
                'active' : scrolled
            })}>
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <a href="#" className="logo">
                            Dental <span>.Care</span>
                        </a>
                        {/* Menu */}
                        {
                            <nav className={cls('nav',{
                                'active': showMenu
                            })}>
                                <a href="#home">home</a>
                                <a href="#about">about</a>
                                <a href="#services">services</a>
                                <a href="#reviews">reviews</a>
                                <a href="#contact">contact</a>
                            </nav>
                        }
                        <a href="#contact" className="link-btn">make pointment</a>
                        <div id="menu-btn" className={cls('fas fa-bars', {
                            'fa-times' : showMenu
                        })} onClick={handleClickMenu}>
                        </div>
                    </div>
                </div>
            </header>
            {/* home section start */}
        </>
    )
}

export default Header