import styles from './Form.module.scss';

type Props = {}

function Form({}: Props) {
  return (
    <form className={styles.form}>
        <h1 className={styles.title}>Formulario de Contacto</h1>
        <hr />
        <div className={styles["form-content"]}>
            <div className={styles.group}>
                <label htmlFor="">Nombre Completo</label>
                <input type="text" placeholder='Ingrese Nombre Completo'/>
            </div>
            <div className={styles.group}>
                <label htmlFor="">Gmail</label>
                <input type="email" placeholder='Ingrese Correo'/>
            </div>
            <div className={styles.group}>
                <label htmlFor="">Asunto</label>
                <input type="text" placeholder='Ingrese Asunto'/>
            </div>
            <div className={styles.group}>
                <label htmlFor="">Descripción</label>
                <textarea placeholder='Ingrese Descripción'/>
            </div>
        </div>
        <button type='submit'>Enviar</button>
    </form>
  )
}

export default Form