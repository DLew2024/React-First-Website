import PropTypes from 'prop-types'

function Student(props){

    return(
        <div className="student">
            <p>Hello {props.name}</p>
            <p>You are {props.age}</p>
            <p>Hello are you a Student ? {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );

}
Student.propTypes = {

    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,

}
export default Student