import styles from './Input.module.css'

function Input ({type, text, name, placegolder, handleOnChange, value}) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <input required type={type} name={name} id={name} placeholder={placegolder} onChange={handleOnChange} value={value}/>
        </div>
    )
}

export default Input