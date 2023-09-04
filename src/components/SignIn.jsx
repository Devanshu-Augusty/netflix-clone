import { RiArrowDropRightLine } from 'react-icons/ri';


const SignIn = () => {
    return (
        <form className="pt-4 flex flex-col justify-center
    items-center">
            <p className="text-[23px] leading-6 text-center
            max-lg:text-[17px] max-sm:px-2">
                Ready to watch? Enter your email to create or restart your membership.
            </p>
            <div className="mt-5 flex gap-3 max-sm:flex-col">
                <input type="text" placeholder="Email Address"
                className="w-[400px] p-4 border text-[18px]
                bg-transparent backdrop-blur-[2px] rounded-md
                max-lg:w-[300px] max-lg:p-3 max-sm:w-[290px]
                " />
                <div className='bg-red pl-5 flex rounded-md
                justify-center items-center text-2xl font-bold
                max-lg:text-xl max-sm:max-w-[170px]
                max-sm:font-normal max-sm:ml-[21%]
                 max-sm:py-1'>
                    <button>
                        Get Started
                    </button>
                    <div className='text-5xl max-sm:text-4xl'>
                        <RiArrowDropRightLine />
                    </div>
                </div>

            </div>
        </form>
    )
}

export default SignIn;