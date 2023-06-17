export default function PopupImage({card, open, onClose}) {
  return (
    <div className={`popup popup-images ${open && "popup_opened"}`}>
      <div className="popup__container-images">
        <button className="popup__close" type="button" aria-label="Закрыть" onClick={onClose}/>
        <img className="popup__image" src={card.link} alt={card.name} />
        <p className="popup__caption">{card.name}</p>
      </div>
    </div>
  );
}
