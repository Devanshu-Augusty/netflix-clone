import logo from '../assets/images/logo.png';
import Button from './Button';
import { BsGlobe } from 'react-icons/bs';
import { MdArrowDropDown } from 'react-icons/md';

const Nav = () => {
  return (
    <nav className='flex justify-between items-center py-7
    px-40 max-lg:px-10 max-sm:px-5'>
        <div>
            <img src={logo} alt="logo image"
            width={150} height={100}
            className='max-lg:w-[100px]' />
        </div>

        <div className='flex gap-6 max-sm:gap-2'>
            <Button text="English" globeIcon={<BsGlobe />}
            dropIcon={<MdArrowDropDown />} />
            <Button text="Sign In" />
        </div>

    </nav>
  )
}

export default Nav