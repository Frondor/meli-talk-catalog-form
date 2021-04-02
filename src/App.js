import FormContainer from "./components/form";
import "./styles.css";
import "./components/button/styles.css";
import "./components/form/styles.css";
import "./components/form-field/styles.css";
import "./components/form-controls/text/styles.css";
import "./components/form-controls/select/styles.css";
import "./components/form-controls/number-unit/styles.css";

export default function App() {
  return (
    <div className="App">
      <FormContainer productId="123456" />
    </div>
  );
}
