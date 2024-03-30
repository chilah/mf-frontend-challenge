import React from 'react';
import style from './Modal.module.css';

type Props = {
  open: boolean;
  onClose: () => void;
} & React.PropsWithChildren;

const Modal: React.FC<Props> = (props) => {
  const { open, onClose, children } = props;

  return (
    <React.Fragment>
      {open ? (
        <div>
          <div className={style.modal_background} onClick={onClose} />
          <div className={style.modal_container}>
            <div className={style.modal_main_body}>
              <div className={style.modal_content_body}>
                <div>
                  <div className={style.modal_close_icon} onClick={onClose}>
                    X
                  </div>
                </div>
                {children}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default Modal;
