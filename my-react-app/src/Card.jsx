import profilePic from "./assets/Dog.jpeg"


function Card() {

    return(
        <>
        <div className="card">
            <img className="cardPic" src={profilePic} alt="Picture of me" />
            <h2 className="cardHeader">DLew</h2>
            <p className="cardText">Welcome to my first card creation project.</p>
        </div>
        </>
    );

}


export default Card