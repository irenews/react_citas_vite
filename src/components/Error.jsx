const Error = ({children}) => {
  return (
    <div className='bg-red-800 text-white text-center p-3 mb-4 uppercase font-bold rounded-md'>
        {children}
    </div>
  )
}

export default Error