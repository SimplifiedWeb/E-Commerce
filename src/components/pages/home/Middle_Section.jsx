const Middle_Section = () => {
  return (
    <>
      <div className="middle-section border-2 flex justify-between items-center   border-yellow-300">
        <div className="left-side border-2 border-violet-300">
          <h4>New Collection</h4>
          <h1>Compostela</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            corporis accusantium nisi voluptate assumenda itaque aliquid autem
            vero vitae vel?
          </p>
        </div>
        <div className="middle-side">
          <img
            src="images/home_harry.png"
            alt="harry-yellow-shirt"
            className="w-[80%] h-[80%]"
          />
        </div>
        <div className="right-side">
          <div className="top">
            <h3>Colour: White</h3>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </div>
          <div className="middle"></div>
        </div>
        <div className="bottom-section">
          <div className="first-box"></div>
          <div className="second-box"></div>
          <div className="third-box"></div>
        </div>
      </div>
    </>
  );
};

export default Middle_Section;
