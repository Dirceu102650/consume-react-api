import { useAlert } from 'react-alert'

const Home = () => {
  const alert = useAlert()

  return (
    <div>
      <button
        onClick={() => {
          alert.show('Oh look, an alert!')
        }}
      >
        Show Alert
      </button>
      <button
        onClick={() => {
          alert.error('You just broke something!')
        }}
      >
        Oops, an error
      </button>
      <button
        onClick={() => {
          alert.success("It's ok now!")
        }}
      >
        Success!
      </button>
    </div>
  )
}

export default Home
