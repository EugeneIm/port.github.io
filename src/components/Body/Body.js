import styles from "./style.module.css";

const imageLinks = [
  "https://i.pinimg.com/564x/5e/bb/d0/5ebbd08463dc21a42e28903c1c5a2d59.jpg",
  "https://i.pinimg.com/564x/69/24/ec/6924ec3771635f917e9cea844abfbce1.jpg",
  "https://i.pinimg.com/564x/6d/df/9d/6ddf9d9982a9dcf2d7f1ed8d07ed1049.jpg",
  "https://i.pinimg.com/564x/74/82/5b/74825b10d3096266e78abf94aeab0377.jpg",
];

function Body() {
  return (
    <div className={styles.body}>
      <a href="https://store.steampowered.com/app/367520/Hollow_Knight/">
        <img src={imageLinks.at(0)} alt="Tokyo Ghoul" />
      </a>
      <img src={imageLinks.at(1)} alt="Paper Bag Head" />
      <img src={imageLinks.at(3)} alt="Hollow Knight" />
      <p className={styles.body}>
        Hi, I'm Eugene. I'm a software developer with a passion for creating
        efficient and scalable applications. Welcome to my portfolio!
      </p>
    </div>
  );
}
export default Body;
