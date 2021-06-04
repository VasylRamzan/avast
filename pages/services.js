import styles from '../styles/Home.module.css'

export default function Services() {
    return (
        <div className={styles.container}>
            <title>Avast - Послуги</title>
        <main className={styles.main}>
            <h1 className={styles.title}>Послуги, які забеспечує антивірусна система Avast</h1>
            <div className={styles.text}>
            <div className={styles.text_bold}>Захист від шкідливих програм.</div>
            <p>Перевірка комп'ютера на віруси під час запуску, до повного завантаження операційної системи.</p>
            <div className={styles.text_bold}>Оновлення баз даних.</div>
            <p>Щоденне оновлення баз данних для більш ефективного захисто вашої системи.</p>
            <div className={styles.text_bold}>Очистка вашої системи від сміття та файлів шкідників.</div>
            <p>Швидкий і простий у використанні. Досконала система очистки файлів.</p>
            </div>
        </main>
          <footer className={styles.footer}>
          </footer>
        </div>
      )
}