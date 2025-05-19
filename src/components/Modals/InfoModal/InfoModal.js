import { useEffect, useRef } from "react";

const InfoModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <modal className="info-modal">
      <div className="info-modal__content" ref={modalRef}>
        <h1 className="info-modal__title">How to play</h1>
        <ol>
          <li>
            You’ll see a news card and need to decide if it’s real or fake.
          </li>
          <li>
            If you think it’s fake, try to guess which trick is being used by
            picking a card below!
          </li>
          <li>If you think the news card is real, pick the “Facts” card.</li>
          <li>
            Look for the “eye” symbols at the bottom right of each news card —
            they show how many tricks are being used.
          </li>
          <li>
            If you guess wrong, you’ll lose followers and if you guess right,
            you’ll gain more followers!
          </li>
          <li>The player with the most followers at the end wins!</li>
        </ol>
      </div>
    </modal>
  );
};

export default InfoModal;
