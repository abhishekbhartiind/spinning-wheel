import { useState, useEffect } from "react"
import styles from "./Wheel.module.scss"

const items = [
  { name: "Pizza", img: "/images/products/product1.jpg" },
  { name: "Sandwiches", img: "/images/products/product2.jpg" },
  { name: "Salads", img: "/images/products/product3.jpg" },
  { name: "Soup", img: "/images/products/product4.jpg" },
  { name: "Japanese food", img: "/images/products/product5.jpg" },
]
const Wheel = () => {
  const [rotatingWheel, setRotatingWheel] = useState("")
  const [selectedItem, setSelectedItem] = useState(null)

  const startRotationClicked = (event) => {
    event.preventDefault()

    setRotatingWheel(`${styles.startRotate}`)

    setTimeout(() => {
      setRotatingWheel(`${styles.startRotate} ${styles.stopRotate}`)
    }, Math.floor(Math.random() * 10000) + 1)
  }

  return (
    <div className={styles.wheelContainer}>
      <div
        className={`${styles.wheel} ${rotatingWheel}`}
        style={{ "--nb-item": items.length }}
      >
        {items.map((item, index) => (
          <div
            className={styles.wheelItem}
            key={index}
            style={{ "--item-nb": index }}
          >
            <img src={item.img} alt="brand" width="50" height="50" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      <button className={styles.spinButton} onClick={startRotationClicked}>
        SPIN
      </button>
    </div>
  )
}

export default Wheel
