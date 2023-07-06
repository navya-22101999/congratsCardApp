const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="heading">Congratulations</h1>
    <div className="profile-container">
      <div className="profile">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        />
      </div>
      <div className="text-container">
        <h1 className="kiran">Kiran V</h1>
        <p className="vishnu">
          Vishnu institute of Computer Education and Technology, Bhimavram
        </p>
      </div>
      <div className="profile">
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
          className="image"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
