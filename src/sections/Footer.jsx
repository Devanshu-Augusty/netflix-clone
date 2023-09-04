import Button from "../components/Button";
import { BsGlobe } from 'react-icons/bs';
import { MdArrowDropDown } from 'react-icons/md';
import { footerItems } from "../constants";

const Footer = () => {
  return (
    <section className="bg-black text-footer px-44 py-16
    flex flex-col justify-center items-start gap-5 text-[16px]
    max-lg:px-11">
      <div className="mb-4">
        Questions? Call
        <span className="underline
        cursor-pointer ml-1"> 000-200-200-200</span>
      </div>

      <div className="flex flex-row gap-[200px] flex-wrap
      underline mb-4 max-lg:gap-[80px] max-sm:gap-[60px]">
        <div className="flex flex-col gap-2">
          {footerItems[0].list1.map((item, index) => (
            <div key={index} className="cursor-pointer">
              {item.item}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {footerItems[1].list2.map((item, index) => (
            <div key={index} className="cursor-pointer">
              {item.item}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {footerItems[2].list3.map((item, index) => (
            <div key={index} className="cursor-pointer">
              {item.item}
            </div>
          ))}
        </div>
      </div>


      <Button text="English" globeIcon={<BsGlobe />}
        dropIcon={<MdArrowDropDown />} />

      <p>Netflix India</p>
    </section>
  )
}

export default Footer