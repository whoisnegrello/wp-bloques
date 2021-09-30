const Edit = (props) => {
  const {className} = props;
  return (
    <div className={className}>
      <div className="signin__container">
        <h1 className="sigin__titulo">Register</h1>
        <form className="signin__form" id="signup">
          <div className="signin__name name--campo">
            <label for="Name">Name</label>
            <input name="name" type="text" id="Name" />
          </div>
          <div className="signin__email name--campo">
            <label for="email">Email</label>
            <input name="email" type="email" id="email" />
          </div>
          <div className="signin__pass name--campo">
            <label for="password">Password</label>
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

export default Edit;
