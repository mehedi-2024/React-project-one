
const Banar = () => {
  return (
    <div className='relative text-center pb-28 text-white mb-80 md:mb-96 p-16 rounded-b-xl bg-purple-600'>
      <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize With <br />Gadget Heaven Accessorize</h1>
      <p className='max-w-[900px] my-8 mx-auto text-center text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laudantium, culpa ipsum, debitis earum, ipsam doloremque officia aut vel porro deserunt reiciendis voluptates.</p>

      <button className='py-2 px-5 font-bold hover:bg-purple-700 border hover:text-white bg-white text-purple-600 rounded-full'>Shop Now</button>

      <div className='w-[70%] h-fit p-2 border-2 rounded-xl bg-[#ffffff58] absolute -bottom-80 md:-bottom-[350px] lg:-bottom-96 left-[50%] -translate-x-[50%]'>
          <img src="src/assets/banner.jpg" alt="" className='rounded-xl object-cover w-full min-h-96 max-h-[450px]' />
      </div>
    </div>
  )
}

export default Banar