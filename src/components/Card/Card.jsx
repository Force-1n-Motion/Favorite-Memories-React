export default function Card({ card, onCardClick }) {
  return (
    <div class="elements">
      <article className="element">
        <button type="button" className="element__button-delete" />
        <img
          src={card.link}
          alt={card.name}
          className="element__img"
          onClick={() => onCardClick({ link: card.link, name: card.name })}
        />
        <div className="element__content">
          <h2 className="element__text">{card.name}</h2>
          <button type="button" className="element__button-like" />
          <span className="elements__counter">0</span>
        </div>
      </article>
    </div>
  );
}
