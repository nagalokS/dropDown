import { DropBody } from "./components";
import "./scss/null.scss";
import "./scss/fonts.scss";

const App = () => {
  return (
    <div className="container">
      <h3>Single</h3>
      <DropBody multiple={false} withIcon={true} />
      <h3>Multiple</h3>
      <DropBody multiple={true} withIcon={false} />
    </div>
  );
};
export default App;
