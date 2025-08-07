import styles from "./style.module.css";

function Header() {
  return (
    <header>
      <h1 classname={styles.header}>My Portfolio</h1>
      <nav className={styles.ul}>
        <ul>
          <li>
            <a href="https://github.com">Github</a>
          </li>
          <li>
            <a href="https://github.com/EugeneIm/port.github.io">Source Code</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
