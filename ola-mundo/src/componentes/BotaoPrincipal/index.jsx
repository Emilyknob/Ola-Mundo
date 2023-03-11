import styles from "./BotaoPrincipal.module.css";

export default function BotaoPrincipal(props) {
    return(
        <button className={`
            ${styles.botaoPrincipal}
            ${styles[props.tamanho]}
        `}>
            {props.texto}
        </button>
    )
}