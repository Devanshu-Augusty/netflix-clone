import Nav from "../components/Nav";
import SignIn from "../components/SignIn";

const Header = () => {
  return (
    <header className='h-[110vh] bg-cover bg-header relative
    border-b-8 border-lightBlack max-lg:h-[100vh]'>
      <Nav /> 

      <div className="text-white flex flex-col justify-center
      items-center absolute top-[40%] w-full gap-2">
        <h2 className="text-5xl font-bold leading-normal
        text-center max-lg:text-3xl max-sm:px-1">
          Unlimited movies, TV shows and more
        </h2>
        <p className="text-3xl text-center max-lg:text-xl">
          Watch anywhere. Cancel anytime.
        </p>
        <SignIn />
      </div>

    </header>
  )
}

export default Header