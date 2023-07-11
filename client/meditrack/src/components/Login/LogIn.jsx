import styles from './LogIn.module.css'

const LogIn = () => {


    return(
        <div className={styles.container}>
            <h3 className={styles.tittle}>Welcome to MediTrack</h3>
            <h4 className='logIn'>Already a member?</h4>
            
            <form className={styles.form}>
                <div className = {styles.input}>
                <label for='email'>Email: </label>
                <input type='text' id='email' name='email'/>
                </div>
                <div className = {styles.input}>
                <label for='password'>Password: </label>
                <input type='text' id='password' name='password'/>
                </div>
                <button className={styles.button}>Log In</button>
                <button className={styles.button}>GoogleButton</button>
            </form>
            
        </div>
    )
}


export default LogIn