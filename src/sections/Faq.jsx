import { faqs } from "../constants";
import FaqCard from "../components/FaqCard";
import SignIn from "../components/SignIn";
import { useState } from "react";

const Faq = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    if(index === open) {
      setOpen(null);
    }
    else {
      setOpen(index);
    }
  }

  return (
    <section className="bg-black text-white flex flex-col
    justify-center items-center py-16 border-b-8 border-lightBlack ">
      <h2 className="text-5xl leading-normal font-bold mb-5
      max-lg:text-3xl max-sm:px-1 text-center">
        Frequently Asked Questions
      </h2>

      <div className="mb-6 w-full px-44 max-lg:px-10
      max-sm:px-5 ">
        {faqs.map((faq, index) => {
          console.log(open);
          return (
            <FaqCard key={index} {...faq} 
            toggle={() => toggle(index)} 
            open={index === open} />
          )
          
        })}
      </div>

      <SignIn />

    </section>
  )
}

export default Faq