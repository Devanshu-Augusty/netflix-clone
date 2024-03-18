

const Button = ({text, globeIcon, dropIcon}) => {
  //comment test (again) testing
  return (
    <div>
        <button className={`text-white py-1 px-3
        rounded-[5px] flex justify-center items-center gap-2
        ${text === 'English' ? 'bg-transparent border' : 'bg-red'}`}>
            {globeIcon &&
              <div className="max-sm:py-1">{globeIcon}</div> 
            }
            {text === 'Sign In' && text}
            {text === 'English' && 
              <span className="max-sm:hidden">
                {text}
              </span>
            }
            {dropIcon &&
              <div className="text-lg">{dropIcon}</div> 
            }
        </button>
    </div>
  )
}

export default Button