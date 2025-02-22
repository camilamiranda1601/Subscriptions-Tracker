import PropTypes from "prop-types";
import SingleItem from "./SingleItem";

const DisplayItems = ({ subs, eliminarItem, editItem }) => {
    return (
        <>
            <h2>Suscripciones</h2>
            {
                subs.map(item => (
                    <SingleItem 
                        key={item.id}
                        id={item.id} 
                        price={item.price} 
                        type={item.type} 
                        eliminarItem={eliminarItem}
                        editItem={editItem}
                    />
                ))
            }
        </>
    );
}

DisplayItems.propTypes = {
    subs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            price: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
        })
    ).isRequired,
    eliminarItem: PropTypes.func.isRequired,
    editItem: PropTypes.func.isRequired,
};

export default DisplayItems;
