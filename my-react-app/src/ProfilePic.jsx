
function ProfilePic(){

    const imgUrl = './src/assets/Dog.jpeg';

    const handleClick = (e) => e.target.style.display = "none"

    return(
        <>
            <img onClick={(e) => handleClick(e)} className="img" src={imgUrl} width="150px" height="auto" alt="" />
        </>
    );

}
export default ProfilePic