import { useState } from "react"

export default function Header({ isConnected, name }) {
   const [isConnect, setIsConnect] = useState(isConnected)
    function connect() {
        setIsConnect(!isConnect) 

    }
    return (
        <>
            <div className='Header'>
              <h1 className='titre'> KIVENTOU <p className='Se_connecter'> Se Connecter </p></h1>
      
            </div>
            {/* {isConnect ? <div onClick={connect}>
                <h2>{name}</h2>
            </div> : <div onClick={connect}>
                Se connecter</div>} */}
        </>
    )
}