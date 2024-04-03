import styles from './SearchBox.module.css'

export default function SearchBox({ value, onChange }) {
    return (
      <div className={styles.box}>
        <label htmlFor="searchInput" className={styles.title}>Find contact by name</label>
        <input
            id="searchInput"
            type="text"
            placeholder="Search contacts..."
            value={value}
            onChange={onChange}
            className={styles.input}
    />
      </div>
    
  );
}