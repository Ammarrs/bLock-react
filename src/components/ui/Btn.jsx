function Btn(props) {
  let btnName = props.name;
  return (
    <div className="my-3">
      <button className="border rounded-3xl py-3 px-7 hover:bg-(--bg-secondary) hover:duration-300 hover:text-white hover:border-(--bg-secondary) ">{btnName}</button>
    </div>
  )
}

export default Btn