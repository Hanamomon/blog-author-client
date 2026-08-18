import { useRef, useState, useEffect } from 'react';
import styles from '@/Posts/post-entry.module.css';

function ConfirmDialog({ onDelete }) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (isOpen) dialog.showModal();
    else dialog.close();
  }, [isOpen]);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Delete</button>
      <dialog className={styles.dialog} ref={dialogRef}>
        <p>Are you sure you want to delete this comment?</p>
        <div>
          <button onClick={() => setIsOpen(false)}>Cancel</button>
          <button onClick={onDelete}>Delete</button>
        </div>
      </dialog>
    </>
  );
}
export default ConfirmDialog;
