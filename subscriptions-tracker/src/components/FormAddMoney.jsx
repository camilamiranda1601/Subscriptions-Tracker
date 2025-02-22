import { useState } from "react";
import PropTypes from "prop-types";

const FormAddMoney = ({ setCount, setIsValid }) => {
    const [input, setInput] = useState("");
    const [error, setError] = useState(false);

    const handleForm = e => {
        e.preventDefault();
        if (input === "" || Number(input) < 0) {
            setError(true);
            return;
        }
        setError(false);
        setCount(Number(input));
        setIsValid(true);
        //console.log(input);
    }

    return ( 
        <div className="form-add-money">
            <form onSubmit={ handleForm }>
                <p>Agregar Presupuesto</p>
                <input type="number" placeholder="$300" onChange={e => setInput(e.target.value)} />
                <input type="submit" value="Agregar" />
            </form>
            { error ? <p className="error">Presupuesto inválido</p> : null}
        </div>
    );
}

FormAddMoney.propTypes = {
    setCount: PropTypes.func.isRequired,
    setIsValid: PropTypes.func.isRequired,
};

export default FormAddMoney;
