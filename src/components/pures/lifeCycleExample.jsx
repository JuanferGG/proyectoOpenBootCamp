/**
 * Ejemplo de componente tipo class que dispone de los metodos de ciclo de vida
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';


class LifeCycleExample extends Component {
    constructor(props) {
        super(props)
        console.log('constructor: Cunado se instancia el componente')
    }

    componentWillMount() {
        console.log('WillMount: Antes del montage del componente')
    }

    componentDidMount() {
        console.log('DidMount: Justo al del montage del componente, antes de renderizarlo ')
    }

    componentWillReceiveProps(nextProps) {
        console.log('WillReceiveProps: Si va a recivir nuevas props')
    }

    shouldComponentUpdate(nextProps, nexState) {
        /**
         * Controlar si el componente debe actualizarse o no
         */
        // return true / false
    }

    componentWillUpdate(nextProps, nexState) {
        console.log('WillUpdate: Justo antes de actualizarse')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DidUpdate: Justo despues de actualizarse')
    }

    componentWillUnmount() {
        console.log('WillUnmount: Justo antes de desaparecer')
    }

    render() {
        return(
            <div>

            </div>
        )
    }
}


LifeCycleExample.propTypes = {

};


export default LifeCycleExample;
