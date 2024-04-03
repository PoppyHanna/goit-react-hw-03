import { GiRotaryPhone } from "react-icons/gi";
import { FiUser } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import styles from './Contact.module.css'

const Contact = ({ contact, onDelete }) => {
  const handleDelete = () => {
    onDelete(contact.id);
  };

  return (
    <div className={styles.box}>
      <p className={styles.name}><span className={styles.span}><FiUser className={styles.icon}/></span> {contact.name}</p>
      <p className={styles.number}><span><GiRotaryPhone className={styles.icon}/></span> {contact.number}</p>
      <div className={styles.btn}><button onClick={handleDelete} className={styles.button}>Delete <span><RiDeleteBin5Line /></span></button></div>
      
    </div>
  );
};

export default Contact;