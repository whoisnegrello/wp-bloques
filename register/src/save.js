import {RichText} from "@wordpress/block-editor";

const Save = (props) => {
  const {className, attributes} = props;
  const {title, nameLabel, emailLabel, passwordLabel, text} = attributes;

  return (
  <div className={className}>
    <div className="signin__container">
      <RichText.Content
        tagName="h1"
        className="sigin__titulo"
        value={title}
      />
      {text &&
        <RichText.Content
          tagName="p"
          value={text}
        />
      }
      <form className="signin__form" id="signup">
        <div className="signin__name name--campo">
          <label for="Name">{nameLabel}</label>
          <input name="name" type="text" id="Name" />
        </div>
        <div className="signin__email name--campo">
          <label for="email">{emailLabel}</label>
          <input name="email" type="email" id="email" />
        </div>
        <div className="signin__pass name--campo">
          <label for="password">{passwordLabel}</label>
          <input name="password" type="password" id="password" />
        </div>
        <div className="signin__submit">
          <input type="submit" value="Create" />
        </div>
        <div className="msg"></div>
      </form>
    </div>
  </div>
  );
};

export default Save;
