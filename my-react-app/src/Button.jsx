
function Button() {


    const handleClick = (e) => e.target.textContent = "Ouch that hurt"
    
    // let count = 0;
    // const handleClick = (name) => {

    //     if(count < 3){
    //         count++;
    //         console.log(`${name} you've clicked me ${count} times`);
    //     }
    //     else{
    //         console.log(`${name} stop clicking me!!!`);
    //     }
    // }

    return(
        <>
            <button onDoubleClick={(e) => handleClick(e)}>Click Me </button>
        </>
    );

}

export default Button