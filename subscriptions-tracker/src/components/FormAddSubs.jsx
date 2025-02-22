import { useState } from "react";
import PropTypes from "prop-types";

const FormAddSubs = ({ 
    setType, 
    setPrice, 
    type, 
    price, 
    setSubs, 
    subs, 
    editId, 
    setEditId, 
    spent,
    count 
}) => {
    const [error, setError] = useState(false);
    const [errorMoney, setErrorMoney] = useState(false);

    const handleSubs = e => {
        e.preventDefault();
        if (price === "" || Number(price) < 0 || type === "" ) {
            setError(true);
            return;
        }

        if (count - spent < Number(price)) {
            setErrorMoney(true);
            return;
        }

        setError(false);
        setErrorMoney(false);

        if (editId !== "") {  
            setEditId("");
            const newSubs = subs.map(item => {
                if (item.id === editId) {
                    return { ...item, type, price }; 
                }
                return item;
            });
            setSubs(newSubs);
        } else {
            const data = {
                type: type,
                price: price,
                id: Date.now()
            };
            setSubs([...subs, data]);
        }

        setType("");
        setPrice("");
    }

    return (
        <div className="add-subscription">
            <h3>Agregar Subscripciones</h3>
            <form onSubmit={ handleSubs } >
                <p>Servicio</p>
                <select onChange={e => setType(e.target.value)} value={type} >
                    <option value="">-- Elegir --</option>
                    <option value="columbiaclub">Columbia House Music Club</option>
                    <option value="bmgservice">BMG Music Service</option>
                    <option value="rsmagazine">Rolling Stones Magazine</option>
                    <option value="billboard">Bilboard Magazine</option>
                </select>
                <p>Cantidad</p>
                <input type="number" placeholder="$20" onChange={e => setPrice(e.target.value)} value={price} />
                <input type="submit" value={editId !== "" ? "Guardar" : "Agregar"} />
            </form>
            { error && <p className="error">Campos inválidos</p> }
            { errorMoney && <p className="error">No hay presupuesto</p> }
        </div>
    );
}

FormAddSubs.propTypes = {
    setType: PropTypes.func.isRequired,
    setPrice: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    setSubs: PropTypes.func.isRequired,
    subs: PropTypes.array.isRequired,
    editId: PropTypes.string.isRequired,
    setEditId: PropTypes.func.isRequired,
    spent: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
};

export default FormAddSubs;
