import PizzaCard from "./PizzaCard";
import styles from "../styles/PizzaList.module.scss";

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dicta
        molestiae aut tenetur. Ipsam, iste adipisci, quas, quos ab ex eaque
        facilis qui modi ea animi ratione quae atque possimus.
      </p>
      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
};

export default PizzaList;
