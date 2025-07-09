import React from 'react';
import styles from './StudyPartnersModal.module.css';

const StudyPartnersModal = ({ visible, onClose }) => {
  if (!visible) return null;

  const partners = [
    {
      name: '하흥주님',
      vercel: 'https://bulk-mini-project.vercel.app/',
      github: 'https://github.com/ThePott/bulk-mini-project',
    },
    {
      name: '우혜림님',
      vercel: 'https://vercel.com/woo-hyerim',
      github: 'https://todo-list-app-ecru-pi.vercel.app/',
    },
  ];

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div  className={styles.modal} 
            role="dialog" 
            aria-modal="true" 
            aria-labelledby="modal-title">
        <h2 id="modal-title">My Study Partners</h2>
        <hr />
        <div className={styles.partnerGrid}>
          <div className={styles.name}>Member</div>
          <div>Vercel</div>
          <div>GitHub</div>

          {partners.map((p) => (
            <React.Fragment key={p.name}>
              <div className={styles.name}>{p.name}</div>
              <div>
                <a href={p.vercel} target="_blank" rel="link">
                  Go!
                </a>
              </div>
              <div>
                <a href={p.github} target="_blank" rel="link">
                  Go!
                </a>
              </div>
            </React.Fragment>
          ))}
        </div>
        <button className={styles.closeBtn} onClick={onClose}>
          닫기
        </button>
      </div>
    </>
  );
};

export default StudyPartnersModal;
