// componente react function

import React, { useState } from "react";
import PropTypes from "prop-types";

const GreetingF = (props) => {
    // const [variable, metodo Actualizable] = useState(Valor_Inicial)
    const [age, setage] = useState(22);

    const birthday = () => {
        // actualiza el state
        setage(age + 1)
    }

    return (
        <div>
            <h1>Hola { props.name } desde componente funcional !</h1>
            <h2>Tu edad es: { age }.</h2>
            <div>
                <button onClick={birthday}>Cumplir Años</button>
            </div> 
        </div>
    );
};

GreetingF.propTypes = {
    name: PropTypes.string
};

export default GreetingF;
