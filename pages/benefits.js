import styles from '../styles/Home.module.css'

export default function Benefits() {
    return (
        <div className={styles.container}>
            <title>Avast - Переваги</title>
        <main className={styles.main}>
            <h1 className={styles.title}>Переваги використання анитивіруса Avast</h1>
            <div className={styles.text}>
            <div className={styles.text_bold}>Висота якості</div>
            <p>Avast являється провідною фірмою у забезпеченні якості та цінності для наших клієнтів. Кожен член нашої команди є кваліфікованим співробітником нашої компанії.</p>
            <div className={styles.text_bold}>Хороша підтримка</div>
            <p>Менеджери компанії завжди готові відповісти на ваші запитання. Ви можете зателефонувати нам у вихідні та вночі.</p>
            <div className={styles.text_bold}>Індивідуальний підхід</div>
            <p>Компанія працює за принципом індивідуального підходу до кожного клієнта. Цей метод дозволяє досягати успіхів у задачах усіх рівнів.</p>
            </div>
        </main>
          <footer className={styles.footer}>
          </footer>
        </div>
      )
}