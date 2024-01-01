import React, {useState} from 'react'

const Accordions = (props) => {

    const [item, setItem] = useState(props.datas)

    const handleToggleActive = () => {
        let newActive = item.active === 1 ? 0 : 1;
        setItem({...item, active: newActive})
    }

  return (
    <div
      className={`w-[100%] shadow-md border border-gray-100 p-5 py-2 rounded-lg mb-2 group duration-500 ${
        item.active === 1 ? "is-active bg-orange-200/30 " : ""
      }`}
    >
      <div className="w-[100%] flex justify-between">
        <div className="w-full text-gray-500 group-[.is-active]:font-bold">
          {item.aim}
        </div>
        <div
          className="text-xl text-gray-500 rotate-90 group-[.is-active]:rotate-[270deg] duration-500 cursor-pointer"
          onClick={handleToggleActive}
        >
          {">"}
        </div>
      </div>
      <div className="w-[100%] pl-3 overflow-hidden max-h-0 text-gray-500 group-[.is-active]:max-h-[100px] duration-500">
        {item.detail}
      </div>
    </div>
  );
}

export default Accordions
