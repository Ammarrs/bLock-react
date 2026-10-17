
function Input(props) {
  let placeholder = props.placeholder
  let label = props.label;
  return (
    <div className="flex flex-col my-5 mx-1">
      <label className="font-bold mb-1 text-md" htmlFor="">{label}</label>
      <input className="w-lg py-1.5 px-2.5 border rounded-md focus:outline-0" type="text" placeholder={placeholder}/>
    </div>
  )
}

export default Input