import { GiRotaryPhone } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

const Contact = ({ contact, onDelete }) => {
  const handleDelete = () => {
    onDelete(contact.id);
  };

  return (
    <div>
      <p><FaUserAlt /> {contact.name}</p>
      <p><GiRotaryPhone /> {contact.number}</p>
      <button onClick={handleDelete}>Delete <RiDeleteBin5Line /></button>
    </div>
  );
};

export default Contact;