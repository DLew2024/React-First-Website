
import PropTypes from 'prop-types'

function UserGreeting(props) {

    const welcomeMessage = <h2 className='WelcomeMessage'>
                            Welcome, {props.username} you are logged on {props.day}
                            </h2> 

    const logInPrompt = <h2 className='LogInPrompt'>
                            {props.username} you are not logged on {props.day}
                            </h2>

    return(props.loggedIn ? welcomeMessage : logInPrompt);


}

UserGreeting.proptypes = {
    username: PropTypes.string,
    loggedIn: PropTypes.bool,
    day: PropTypes.number,
}

UserGreeting.defaultProps = {
    username: "Null",
    loggedIn: false,
    day: 0,
}

export default UserGreeting