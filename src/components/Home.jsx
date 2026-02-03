import React from 'react'
import { Link } from 'react-router-dom'
import { Typewriter } from "react-simple-typewriter"

function Home() {
    return (
        <div>
            <div className='w-full h-14 p-4 flex  bg-white '>

            </div>
            <section className='w-full min-h-screen bg-lime-50 max-w-full h-full flex flex-col  items-center'>
                <div className=' w-full max-w-6xl flex flex-col md:flex-row gap-10 md:gap-90'>

                    <div className='flex flex-col w-auto items-center gap-8 justify-center p-4 md:pt-22 pt-40 '>
                        <div className='w-full p-2'>
                            <h1 className='text-4xl font-semibold'>Build your Invoice <br />
                                <span className='text-4xl font-semibold text-green-600'>
                                    <Typewriter
                                        words={[" just in 2 Minutes.", " Build up Bussiness.", " Grow up."]}
                                        loop={true}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={100}
                                        deleteSpeed={100}
                                        delaySpeed={1600}
                                    />
                                </span>
                            </h1>
                        </div>
                            <p className='text-gray-700 text-sm'>useing bill feature and grow up your productivity.</p>
                        <Link to={"/purchase"} className='bg-green-700 w-30 hover:bg-green-600 shadow-lg h-9 rounded-md flex items-center  justify-center text-white font-semibold text-sm'>Build Invoice</Link>
                        <p className='text-gray-700'>(. .) users trustred 60k++</p>

                    </div>


                    <div className='flex  justify-center'>
                        <img className='md:w-full md:max-w-90  md:block w-full max-w-70 md:mt-15  h-auto object-cover md:ml-5  mix-blend-darken' src="/Home.png" alt="image" />
                    </div>




                </div>

                <p className='md:mt-1 mt-10 text-sm text-gray-700'>make your own Bussiness to Grow up.</p>
                <div className=' max-w-full overflow-hidden  md:max-md:  flex justify-evenly items-center '>
                    <img
                        className='mix-blend-darken w-full max-w-30   h-auto object-cover'
                        src="https://media.licdn.com/dms/image/v2/D5610AQGSBiOzL80FwA/image-shrink_800/B56ZqVWQLzI4Ac-/0/1763442231914?e=2147483647&v=beta&t=mtDIjWITDQJRYCsCgNCLeMEAzHuX7Lh-W0Dn0llVmv8" alt="" />

                    <img
                        className='mix-blend-darken w-full max-w-30 mr-10 h-auto object-cover'
                        src="https://static.vecteezy.com/system/resources/thumbnails/021/514/726/small/microsoft-software-logo-brand-symbol-with-name-black-design-illustration-free-vector.jpg" alt="" />

                    <img
                        className='mix-blend-darken w-full max-w-30 mr-10 h-auto object-cover'
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkwVgT13iPSw0noeEF86-_pArXP2suISkZiA&s" alt="" />

                    <img
                        className='mix-blend-darken w-full max-w-20 mr-10 mt-4 h-auto object-cover'
                        src="https://dhjhkxawhe8q4.cloudfront.net/thomasnelson-wp/wp-content/uploads/sites/5/2024/07/15154418/amazon-logo-black-transparent-1.png" alt="" />
                </div>

            </section>
        </div>
    )
}

export default Home