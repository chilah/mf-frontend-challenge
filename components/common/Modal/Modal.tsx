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
              <div className={style.modal_close_container}>
                <div className={style.modal_close_icon} onClick={onClose}>
                  X
                </div>
              </div>

              <div className={style.modal_content_body}>
                <div>Title length should less than 128 characters.</div>
                <div>Time should be numertic values.</div>
                <div>Time range shoule be 0-24</div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default Modal;
