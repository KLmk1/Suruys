import { Header } from './components/Header/Header.jsx'
import Chat from './components/Main/Chat/Chat.jsx'

export function Home() {
  return (
    <>
      <div style={{
        height: '100px',
        width: '100%',
      }}>
        <Header />
      </div>
      <div style={{
        height: '100%',
        width: '100%',
      }}>
        <Chat />
      </div>
    </>
  )
}