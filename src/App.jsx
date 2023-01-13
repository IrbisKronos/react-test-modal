import React, { useState } from 'react';

function Modal({ show, setShow, children }) {
  return (
    <div className={`overlay animated ${show ? "show" : ""}`}>
      <div className="modal">
        <svg onClick={() => setShow(false)} height="200" viewBox="0 0 200 200" width="200">
          <title />
          <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>
        {children}
      </div>
    </div>
  )
}

function App() {
  const [show, setShow] = useState(false)

  return (
    <div className="App">
      <button onClick={() => setShow(true)} className="open-modal-btn">Відкрити Modal✨</button>
      <Modal show={show} setShow={setShow}>        
        <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
        <p>Вивід динамічних даних</p>
      </Modal>
    </div>
  );
}

export default App;