function Card({single_prop,another_prop}) {
  return (
    <div className="w-60 h-60 rounded-xl flex-shrink-0">
      <img
        src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
        alt="Giphy"
        className="rounded-t-xl w-full h-full object-cover"
      />
      <div className="glass py-4 px-5 relative -top-[3.4rem] rounded-b-xl z-10">
        <h1 className="font-bold font-mono mt-14" style={{ fontSize: '2rem' }}>{single_prop}</h1>
        <h2>{another_prop}</h2>
      </div>
    </div>
  )
}

export default Card