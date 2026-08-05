import styles from "./integracao2.module.css"

export default function integracao2() {
    return(
        <div id={styles.integracao2}>
            <p className={styles.vermelha}>Texto #01</p>
            <p className={styles.azul}>Texto #02</p>
            <p className={styles.branca}>Texto #03</p>
        </div>
    )
}