import "./index.css";

const TabletItem = (props) => {
  const { tabletDetails } = props;
  let filteredAltTablets = [];
  let filteredSideEffects = [];
  let filteredUses = [];
  const chemical = tabletDetails[54];
  const habitForming = tabletDetails[55];

  for (let i = 2; i < tabletDetails.length; i += 1) {
    if (i <= 6) filteredAltTablets.push(tabletDetails[i]);
    else if (i <= 48) {
      if (tabletDetails[i] !== "") filteredSideEffects.push(tabletDetails[i]);
    } else if (i <= 53) {
      if (tabletDetails[i] !== "") filteredUses.push(tabletDetails[i]);
    }
  }
  return (
    <div className="each-tablet-container">
      <div>
        <h4>Alternantive tablets</h4>
        <ul className="alter-tablets-container">
          {filteredAltTablets.map((eachItem) => (
            <li>{eachItem}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Side Effects</h4>
        <ul className="alter-tablets-container">
          {filteredSideEffects.map((eachItem) => (
            <li>{eachItem}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Uses</h4>
        <ul className="alter-tablets-container">
          {filteredUses.map((eachItem) => (
            <li>{eachItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TabletItem;
