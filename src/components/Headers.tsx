import { useState } from 'react';
import { Menu, X } from 'lucide-react';
export default function Headers() {
  const [open, setOpen] = useState(false);
  const onClicked = () => {
    setOpen(!open)
  }
  return (
    <div className="text-white shadow-xl p-6 flex flex-row justify-between">
      <div className="font-bold">FArel&jbran</div>
      <button
        onClick={onClicked}
      > {open ? <X size={28} /> : <Menu size={28} />}
      </button>
      {open && (<div className='absolute bg-gray-500/90 top-0 right-0 w-72 h-screen shadow-gray-700 shadow-lg'>
        <div className="w-full flex flex-row justify-end p-6">
          <button
            onClick={onClicked}
          > {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </div>)}
    </div>
  )
}
