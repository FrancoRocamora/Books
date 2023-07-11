import LogIn from "../../components/Login/LogIn"
import styles from './Landing.module.css'
const Landing = (props) => {
    return(
        <div className={styles.landing}>
            <LogIn/>
        </div>
    )
}

export default Landing