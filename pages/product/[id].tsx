import { useState } from "react";
import styles from "../../styles/Product.module.scss";
import Image from "next/image";

const pizza = {
  id: 1,
  img: "/img/pizza.png",
  name: "CAMPAGNOLA",
  price: [19.9, 23.9, 27.9],
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
};
const Products = () => {
  const [size, setSize] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className={styles.right}>
        <h1>{pizza.name}</h1>
        <span>${pizza.price[size]}</span>
        <p>{pizza.desc}</p>
        <h3>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={size == 0 && styles.selected}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={size == 1 && styles.selected}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={size == 2 && styles.selected}>Large</span>
          </div>
        </div>
        <h3>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="cheese"
              name="cheese"
            />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="spicy"
              name="spicy"
            />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="garlic"
              name="garlic"
            />
            <label htmlFor="garlic">Garlic Sauce</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
