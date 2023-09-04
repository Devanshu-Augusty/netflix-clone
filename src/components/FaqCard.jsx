import { Collapse } from 'react-collapse';
import { AiOutlinePlus } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';

const FaqCard = ({question, answer, toggle, open}) => {
  return (
    <div className="flex flex-col justify-center items-start
    mb-2 w-full">
      <div className="flex justify-between items-center 
      w-full bg-lightBlack px-7 py-6 cursor-pointer
      max-lg:py-4"
      onClick={toggle}>
        <h3 className="text-2xl max-lg:text-xl">
          {question}
        </h3>
        <span className='text-4xl max-lg:text-2xl'>
          {open ? <RxCross2 /> : <AiOutlinePlus />}
        </span>
      </div>

      <div>
        <Collapse isOpened={open}>
          <div  className='w-full bg-lightBlack px-7 py-6
          mt-[1px] text-2xl max-lg:text-xl max-lg:py-4'>
            {answer}
          </div>
        </Collapse>
      </div>
    </div>
  )
}

export default FaqCard;