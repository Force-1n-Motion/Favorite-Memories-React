export default function PopupWithForm({name, title, button, children, open, onClose}) {
  return (
    <div className={`popup popup_type_${name} ${open && "popup_opened"}`}>
      <div className="popup__container">
        <button type="button" className="popup__close" aria-label="Закрыть" onClick={onClose}/>
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={name} noValidate="">
          {children}
          <button
            type="submit"
            className="button popup__save popup__save_enabled popup__save_disabled">
            {button||"Сохранить"}
          </button>
        </form>
      </div>
    </div>
  );
}
