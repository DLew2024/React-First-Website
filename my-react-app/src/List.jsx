
import PropTypes from 'prop-types'

function List(props){

    const category = props.category;
    
    const itemList = props.items; 


    // fruits.sort((a, b) => a.name.localeCompare(b.name)); Alphabetical
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); Reverse
    // fruits.sort((a, b) => a.calories - b.calories); Numeric
    // fruits.sort((a, b) => b.calories - a.calories); Reverse

    // const lowCalFruits = fruits.filter(fruits => fruits.calories < 100); 
    // const highFruits = fruits.filter(fruit => fruit.calories >= 100);

    const listItems = itemList.map(item => 
        <li key={item.id}>

            {item.name}: &nbsp; <b>{item.calories}</b>
        
        </li>);

    return(<>
            <h3 className="ListCategory">{category}</h3>
            <ul className="ListItems">{listItems}</ul>
            </>);

}

List.propTypes = {
    category: category.propTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({  id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number})),
}

List.defaultProps = {
    category: "Category",
    items: [],
}

export default List