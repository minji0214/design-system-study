import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import DefaultTextField from "./components/DefaultTextField";
import Label from "./components/Label";

function App() {
  const [value, setValue] = useState("");
  const [isError, setIsError] = useState(false);
  return (
    <>
      <Label htmlFor="email">이메일</Label>
      <DefaultTextField
        id="email"
        onClick={() => setValue("")}
        placeholder="Type something"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        iconPath={reactLogo}
        alt="react-logo"
        isError={isError}
        children="에러 메시지가 있습니다."
      />
      <Label htmlFor="email">주소</Label>
      <DefaultTextField
        id="email"
        onClick={() => setValue("")}
        placeholder="Type something"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        iconPath={reactLogo}
        alt="react-logo"
        isError={isError}
        children="에러 메시지가 있습니다."
      />
    </>
  );
}

export default App;
