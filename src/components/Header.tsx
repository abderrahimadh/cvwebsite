export const Header = () => {
    return (
        <header>
            <div className="photo">
                <img src="image.jpg" width="100%" height="100%" alt=""/>
            </div>
            <div className="des">
                <h3>ABDERRAHIM ADHAOUR</h3>
                <p className="post">Étudiant en génie informatique</p>
            </div>
            <div className="right">
                <p><img src="mail.png" className="info" /><a href="mailto:abderrahimadh@gmail.com">abderrahimadh@gmail.com</a></p>
                <p><img src="maps.png" className="info"/>Av. Ibn Sina, Rabat</p>
                <p><img src="tele.png" className="info"/>+212635596515</p>
            </div> 
        </header>
    )
}
