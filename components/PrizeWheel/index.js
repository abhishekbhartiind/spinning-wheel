import { useState } from "react"
import styles from "./PrizeWheel.module.scss"

const PrizeWheel = () => {
  const [name, setName] = useState(styles.circle)

  const startRotation = (event) => {
    event.preventDefault()

    setName(`${styles.circle} ${styles.startRotate}`)

    setTimeout(() => {
      setName(`${styles.circle} ${styles.startRotate} ${styles.stopRotate}`)
    }, Math.floor(Math.random() * 10000) + 1)
  }

  return (
    <div className={styles.prizeWheel}>
      <div className={styles.arrowDown}></div>
      <ul className={name}>
        <li>
          <div className={styles.text}>1</div>
        </li>
        <li>
          <div className={styles.text}>2</div>
        </li>
        <li>
          <div className={styles.text}>3</div>
        </li>
        <li>
          <div className={styles.text}>4</div>
        </li>
        <li>
          <div className={styles.text}>5</div>
        </li>
        {/* <li>
          <div className={styles.text}>6</div>
        </li>
        <li>
          <div className={styles.text}>7</div>
        </li>
        <li>
          <div className={styles.text}>8</div>
        </li>
        <li>
          <div className={styles.text}>9</div>
        </li>
        <li>
          <div className={styles.text}>10</div>
        </li>
        <li>
          <div className={styles.text}>11</div>
        </li>
        <li>
          <div className={styles.text}>12</div>
        </li> */}
      </ul>
      <button className={styles.spinButton} onClick={startRotation}>
        SPIN
      </button>
    </div>
  )
}

export default PrizeWheel
