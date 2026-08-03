import { useCallback, useState, useEffect ,useRef } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(9)
  const [numbers, setNumbers] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)
  const copyPassword =useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, 
    [password]
  );

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers) str += "0123456789"
    if (character) str += "!@#$&*?|+_^"

    for (let i = 1; i <= length ; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)

    }

    setPassword(pass)
  }, [length, numbers, character, setPassword]
  )

  useEffect(() => { passwordGenerator() }, [length, numbers, character, passwordGenerator])

  return (
    <div className='bg-gray-700 h-dvh flex justify-center items-center'>
      <div className='bg-black w-3xl text-white text-center rounded-4xl'>
        <h2 className='p-6 text-3xl bg-gray-900 rounded-tr-4xl rounded-tl-4xl'>Password Generator</h2>

        <input
          className='bg-white border-none outline-0 h-12 rounded-tl mb-5 rounded-bl mt-4 w-96 text-black ps-4 text-2xl'
          type="text"
          placeholder='Password'
          value={password}
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyPassword}
          className='bg-blue-600 text-2xl p-2 rounded-r '>Copy</button>
        <br />

        <input type="range"
          className='accent-violet-900 me-4 mb-5 cursor-pointer '
          min={6}
          max={99}
          value={length}
          onChange={(e) => { setLength(e.target.value) }}

        />

        <label className='text-2xl me-2'>Length({length}) </label>

        <input type="checkbox"
          className='border-none outline-none me-2 h-4 w-4 '
          defaultChecked={numbers}
          id='numberinput'
          onChange={() => {
            setNumbers((prev) => !prev);
          }}
        />

        <label className='text-2xl me-2'>Numbers</label>

        <input type="checkbox"
          className='border-none outline-none me-2 h-4 w-4 '
          defaultChecked={character}
          id='characterinput'
          onChange={() => {
            setCharacter((prev) => !prev);
          }}
        />

        <label className='text-2xl me-2'>Character</label>

      </div>
    </div>
  )
}

export default App
