import PropTypes from "prop-types";
import { moneyFormat } from "./helpers";

const SingleItem = ({ price, type, id, eliminarItem, editItem }) => {

    const HandleDelete = (e) => {
        e.preventDefault();
        const answer = window.confirm(`Borrar Suscripción a ${type}`);
        if (answer) {
            eliminarItem(id);
        }
    }

    const HandleEdit = e => {
        e.preventDefault();
        editItem(id);
    }

    const urlImage = `/src/images/${type}.png`;

    return (
        <div className="single-item">
            <img src={ urlImage } alt="Services" />
            <h3>Precio: {moneyFormat(Number(price))} </h3>
            <a href="" onClick={HandleDelete} >Borrar</a>
            <a href="" onClick={HandleEdit} >Editar</a>
        </div>
    );
}

SingleItem.propTypes = {
    price: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    eliminarItem: PropTypes.func.isRequired,
    editItem: PropTypes.func.isRequired,
};

export default SingleItem;
