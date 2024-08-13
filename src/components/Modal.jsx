import classes from "./Modal.module.css";
import { Link } from "react-router-dom";
function Modal({ children }) {
 
  return (
    <>
      <Link className={classes.backdrop} to=".."></Link>
      <dialog open={true} className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
