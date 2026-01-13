import { useEffect, useRef, useState, useCallback} from "react";
import "./app.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [isNumAllowed, setisNumAllowed] = useState(false);
  const [isCharAllowed, setisCharAllowed] = useState(false);

  const passwordRef = useRef(null)

  const generatePassword = useCallback(()=>{
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYXabcdefghijklmnopqrstuvwxyz"
    if(isNumAllowed) str += "0123456789"
    if(isCharAllowed) str += '!@#$%^&*()_+-=";.><?/'

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random()* str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length,isNumAllowed,isCharAllowed])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{
    generatePassword()
  },[length,isNumAllowed,isCharAllowed,generatePassword])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            placeholder="Password"
            value={password}
            ref={passwordRef}
            readOnly
            className="outline-none w-full py-1 px-3"
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              max={20}
              min={8}
              onChange={(e) => setLength(e.target.value)}
              className="cursor-pointer"
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="numberInput"
              defaultChecked={isNumAllowed}
              onChange={() => setisNumAllowed((prev) => !prev)}
              className="cursor-pointer"
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="charInput"
              defaultChecked={isCharAllowed}
              onChange={() => setisCharAllowed((prev) => !prev)}
              className="cursor-pointer"
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
