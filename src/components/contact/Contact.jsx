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
          <div>
            <p className={styles.name}><FiUser className={styles.icon}/> {contact.name}</p>
            <p className={styles.number}><GiRotaryPhone className={styles.icon} /> {contact.number}</p>
          </div>
      <div className={styles.btn}><button onClick={handleDelete} className={styles.button}>Delete <RiDeleteBin5Line className={styles.trash}/></button></div>
      
    </div>
  );
};

export default Contact;