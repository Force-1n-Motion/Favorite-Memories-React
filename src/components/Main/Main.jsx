import { useEffect, useState } from "react"
import api from "../../utils/api.js"
import Card from "../Card/Card.jsx"
export default function Main({ onEditProfile, onEditAvatar, onAddPlace, onCardClick}) {
  const[userName, setUserName] = useState("")
  const[userDescription, setUserDescription] = useState("")
  const [userAvatar, setUserAvatar] = useState("")
  const [cards, setCards] = useState([])
  
  useEffect(() => {
    Promise.all([api.getInfo(), api.getCards()])
      .then(([userBox, cardBox]) => {
        setUserName(userBox.name)
        setUserDescription(userBox.about)
        setUserAvatar(userBox.avatar)
        cardBox.forEach(data => data.idDeveloper = userBox._id)
        setCards(cardBox)
    })
  },[])
  
  return (
    <main>
        <section className="profile">
          <div className="profile__container">
            <img src={userAvatar} alt="Фото профиля" className="profile__avatar" />
            <button
              type="button"
              className="profile__avatar-button"
              onClick={onEditAvatar}
              aria-label="Изменить аватар"/>
          </div>
          <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <p className="profile__text">{userDescription}</p>
            <button
              type="button"
              className="profile__edit"
              onClick={onEditProfile}
              aria-label="Редактировать профиль"/>
          </div>
          <button
            type="button"
            className="profile__add-card"
            onClick={onAddPlace}
            aria-label="Добавить карточку"/>
      </section>
      <section className="elements" aria-label="Галерея">
          {cards.map(data => {
            return (
              <div key = {data._id}>
                <Card card={data} onCardClick={onCardClick} />
              </div>
            )
          })}
      </section>
      </main>
  )
}