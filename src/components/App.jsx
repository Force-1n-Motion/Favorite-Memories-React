// <%=require('./images/Vector1.svg')%>
import Main from "./Main/Main.jsx";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import PopupWithForm from "./PopupWithForm/PopupWithForm.jsx";
import PopupImage from "./PopupImage/PopupImage.jsx";
import { useState } from "react";
function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})
  const [isImagePopup, setIsImagePopup] = useState(false)
 

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }
  
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  // function handleDeleteClick() {
  
  // }
  
  function handleCardClick(card) {
    setSelectedCard(card)
    setIsImagePopup(true)
  }
  
  function closePopup() {
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsImagePopup(false)
  }

  return (
    <div className="page__content">
      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        open={isEditProfilePopupOpen}
        onClose = {closePopup}>
        <input
          required=""
          type="text"
          className="popup__input"
          id="name"
          placeholder="Введите имя"
          name="name"
          minLength={2}
          maxLength={40}/>
        <span className="popup__input-error" id="name-error" />
        <input
          required=""
          type="text"
          className="popup__input"
          id="occupation"
          placeholder="О себе"
          name="occupation"
          minLength={2}
          maxLength={200}/>
        <span className="popup__input-error" id="occupation-error" />
      </PopupWithForm>

      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        open={isEditAvatarPopupOpen}
        onClose = {closePopup}>
        <input
          required=""
          type="url"
          className="popup__input"
          id="avatar-link"
          placeholder="Адрес аватара"
          name="avatar"/>
        <span className="popup__input-error" id="avatar-link-error" />
      </PopupWithForm>

      <PopupWithForm
        name="add-card" 
        title="Новое место"
        Button="Создать"
        open={isAddPlacePopupOpen}
        onClose = {closePopup}>
        <input
          required=""
          type="text"
          className="popup__input"
          id="card-title"
          placeholder="Название"
          name="title"
          minLength={2}
          maxLength={30}/>
        <span className="popup__input-error" id="card-title-error" />
        <input
          required=""
          type="url"
          className="popup__input"
          id="card-link"
          placeholder="Адрес сайта"
          name="link"/>
        <span className="popup__input-error" id="card-link-error" />
      </PopupWithForm>

      <PopupWithForm
        name="delete-card" 
        title="Вы уверены?"
        Button="Да" />
      
      <PopupImage
        card={selectedCard}
        open={isImagePopup}
        onClose={closePopup}
      />
      
    </div>
  );
}

export default App;
