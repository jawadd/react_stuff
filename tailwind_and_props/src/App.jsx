import Card from './components/Card'

function App() {
  return (
    <>
      <h1 className='bg-green-900 p-2 rounded-xl mb-2'>React Tailwind</h1>
      <div className="flex flex-wrap justify-center gap-4">
        <Card single_prop="Hello 1" another_prop="test 1"/>
        <Card single_prop="Hello 2" another_prop="test 2"/>
        <Card single_prop="Hello 3" another_prop="test 3"/>
        <Card single_prop="Hello 4" another_prop="test 4"/>
        {/* Add more cards as needed */}
      </div>
    </>
  )
}

export default App