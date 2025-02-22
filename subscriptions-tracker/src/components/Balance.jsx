import { useEffect } from "react";
import PropTypes from "prop-types"; 
import { moneyFormat } from "./helpers";

const Balance = ({ count, subs, spent, setSpent }) => {
    const updateBalance = () => {
        const totalSpent = subs.reduce((total, item) => Number(item.price) + total, 0);
        setSpent(totalSpent);
    };

    useEffect(() => {
        updateBalance();
    }, [subs]);

    return (
        <div className="balance">
            <h3>Presupuesto: {moneyFormat(count)} </h3>
            <h3>Disponible: {moneyFormat(count - spent)} </h3>
            <h3>Gastado: {moneyFormat(spent)} </h3>
        </div>
    );
};

// 👇 Define los tipos de las props
Balance.propTypes = {
    count: PropTypes.number.isRequired,   // 👈 count debe ser un número obligatorio
    subs: PropTypes.array.isRequired,     // 👈 subs debe ser un array obligatorio
    spent: PropTypes.number.isRequired,   // 👈 spent debe ser un número obligatorio
    setSpent: PropTypes.func.isRequired,  // 👈 setSpent debe ser una función obligatoria
};

export default Balance;
