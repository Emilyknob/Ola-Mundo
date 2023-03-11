import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobremim from "assets/minha_foto.jpg";

export default function SobreMim () {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre Mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou a Emily!
            </h3>

            <img src={fotoSobremim} className={styles.fotoSobremim} alt="eu mesma"/>
        </PostModelo>
    )
}