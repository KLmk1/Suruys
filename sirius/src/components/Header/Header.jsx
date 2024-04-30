import styles from './Header.module.scss'

export function Header() {
    return (
        <>
            <header>
                <a className={styles.logoadr} href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
                    <h1 className={styles.logo}>
                        service
                    </h1>
                </a>
                <a className={styles.profile} href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
                    <img className={styles.avatar} src='avatar.png' alt='Profile avatar'/>
                </a>
            </header>
        </>
    )
}