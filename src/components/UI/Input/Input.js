import React from 'react'
import classes from './Input.module.css'


const Input = props => {

    const inputClasses = [classes.InputElement]
    if (props.invalid && props.shouldValidate && props.touched) inputClasses.push(classes.Invalid)


    let inputElement = null
    switch (props.elementType) {
        case ('input'):
            inputElement =
                <input
                    className={inputClasses.join(' ')}
                    name={props.elementName}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.change}
                />
            break
        case ('textarea'):
            inputElement =
                <textarea
                    className={inputClasses.join(' ')}
                    name={props.elementName}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.change}
                />
            break
        case ('select'):
            inputElement =
                <select
                    className={inputClasses.join(' ')}
                    name={props.elementName}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.change}
                >
                    {props.elementConfig.options.map(el =>
                        <option
                            value={el.value}
                            key={el.value}>
                            {el.displayedValue}</option>)}
                </select>
            break
        default:
            inputElement =
                <input
                    className={inputClasses.join(' ')}
                    name={props.elementName}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.change}
                />
    }



    return (
        <div className={classes.Input}>
            <label className={classes.Label}>Jaxana</label>
            {inputElement}
        </div>
    )
}

export default Input
