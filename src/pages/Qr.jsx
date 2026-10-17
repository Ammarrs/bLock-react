import Btn from "../components/ui/Btn"
import Input from "../components/ui/Input"

function Qr() {
  return (
    
      <div className="h-180 grid grid-cols-2">
        <div className="data border-r-2 p-10 flex flex-col items-center justify-center">
          <Input label="Url" placeholder="https://example.com"/>
          <Input label="Name (optional)" placeholder="MyWebsite"/>
          <Btn name="Generate"/>
        </div>
        <div className="qr-display"></div>
      </div>
  )
}

export default Qr