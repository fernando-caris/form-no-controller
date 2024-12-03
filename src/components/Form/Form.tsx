import { useRef, useState } from 'react';
import styles from './Form.module.scss';

type Props = {}

function Form({}: Props) {

    const nameRef = useRef<HTMLInputElement>(null);
    const gmailRef = useRef<HTMLInputElement>(null);
    const asuntoRef = useRef<HTMLInputElement>(null);
    const descRef = useRef<HTMLTextAreaElement>(null);

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setErrors({})
        const newErrors: { [key: string]: string } = {};

        if (nameRef.current?.value.trim() === "") {
            newErrors.name = "Nombre es requerido.";
        }

        if (gmailRef.current?.value.trim() === "") {
            newErrors.email = "Gmail es requerido.";
        }

        if (asuntoRef.current?.value.trim() === "") {
            newErrors.asunto = "Asunto es requerido.";
        }

        if (descRef.current?.value.trim() === "") {
            newErrors.desc = "Descripcion es requerido.";
        }

        setErrors(newErrors);
        console.log(errors)
    }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title}>Formulario de Contacto</h1>
        <hr />
        <div className={styles["form-content"]}>
            <div className={styles.group}>
                <label htmlFor="">Nombre Completo</label>
                <input type="text" placeholder='Ingrese Nombre Completo' ref={nameRef}/>
                {errors?.name && <span className={styles.error}>{errors.name}</span>}
            </div>
            <div className={styles.group}>
                <label htmlFor="">Gmail</label>
                <input type="email" placeholder='Ingrese Correo' ref={gmailRef}/>
                {errors?.email && <span className={styles.error}>{errors.email}</span>}
            </div>
            <div className={styles.group}>
                <label htmlFor="">Asunto</label>
                <input type="text" placeholder='Ingrese Asunto' ref={asuntoRef}/>
                {errors?.asunto && <span className={styles.error}>{errors.asunto}</span>}
            </div>
            <div className={styles.group}>
                <label htmlFor="">Descripción</label>
                <textarea placeholder='Ingrese Descripción' ref={descRef}/>
                {errors?.desc && <span className={styles.error}>{errors.desc}</span>}
            </div>
        </div>
        <button type='submit'>Enviar</button>
    </form>
  )
}

export default Form