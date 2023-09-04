import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { useContextProvider } from '../contexts/ContextProvider'
import { Divider } from 'primereact/divider';
import { Link } from 'react-router-dom';

const Home = () => {
    const { APP_NAME, CLIENT_URL } = useContextProvider();
    document.title = APP_NAME+'HOME';
    return (
        <MainLayout>
            <section className='bg-blue-600 p-6 pt-10 pb-16 text-white h-full md:h-[81vh]'>
                <h1 className='text-center text-3xl md:text-4xl tracking-wider uppercase font-bold mt-2 animate__animated animate__fadeInDown'>Do Business Here</h1>
                <Divider/>
                <div className='animate__animated animate__fadeInUp animate__delay-1s'>
                    <h2 className='text-center text-2xl md:text-3xl font-bold tracking-wide mt-8'>How its works?</h2>
                    <p className='text-center text-xl md:text-2xl tracking-wide mt-3 mb-7'>Matprices provides you two option to be a seller and a buyer.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-10'>
                    <div className='bg-white rounded-md shadow-md p-6 text-center text-black animate__animated animate__fadeInLeft animate__delay-2s'>
                        <Divider align="center" className='mt-[0!important] mb-[2rem!important]'>
                            <span className="border border-gray-400 font-bold bg-blue-600 text-white uppercase tracking-wider px-4 py-1.5 pb-2 rounded-md">Visit As A Seller</span>
                        </Divider>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5'>
                            <Link to={'/visit-as-seller'} className='shadow-lg px-3 py-4 border border-gray-300 rounded-md tracking-wider hover:scale-110 transition-all delay-100 hover:border-2 hover:border-blue-600'>
                                <img src={`${CLIENT_URL}/assets/icons/location.png`} alt='location' className='w-10 md:w-14 mx-auto'/>
                                <h1 className='mt-4 font-bold uppercase'>Visit As a Seller</h1>
                            </Link>
                            <Link className='shadow-lg px-3 py-4 border border-gray-300 rounded-md tracking-wider hover:scale-110 transition-all delay-100 hover:border-2 hover:border-blue-600'>
                                <img src={`${CLIENT_URL}/assets/icons/search.png`} alt='search' className='w-10 md:w-14 mx-auto'/>
                                <h1 className='mt-4 font-bold uppercase'>Search Product</h1>
                            </Link>
                            <Link className='shadow-lg px-3 py-4 border border-gray-300 rounded-md tracking-wider hover:scale-110 transition-all delay-100 hover:border-2 hover:border-blue-600'>
                                <img src={`${CLIENT_URL}/assets/icons/info.png`} alt='contact' className='w-10 md:w-14 mx-auto'/>
                                <h1 className='mt-4 font-bold uppercase'>Contact Buyer</h1>
                            </Link>
                            <Link className='shadow-lg px-3 py-4 border border-gray-300 rounded-md tracking-wider hover:scale-110 transition-all delay-100 hover:border-2 hover:border-blue-600'>
                                <img src={`${CLIENT_URL}/assets/icons/selling.png`} alt='sell' className='w-10 md:w-14 mx-auto'/>
                                <h1 className='mt-4 font-bold uppercase'>Sell Your Product</h1>
                            </Link>
                        </div>
                    </div>
                    <div className='bg-white rounded-md shadow-md p-6 text-center text-black animate__animated animate__fadeInRight animate__delay-3s'>
                        <Divider align="center" className='mt-[0!important] mb-[2rem!important]'>
                            <span className="border border-gray-400 font-bold bg-blue-600 text-white uppercase tracking-wider px-4 py-1.5 pb-2 rounded-md">Visit As A Buyer</span>
                        </Divider>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5'>
                            <Link className='shadow-lg px-3 py-4 border border-gray-300 rounded-md tracking-wider hover:scale-110 transition-all delay-100 hover:border-2 hover:border-blue-600'>
                                <img src={`${CLIENT_URL}/assets/icons/map.png`} alt='map' className='w-10 md:w-14 mx-auto'/>
                                <h1 className='mt-4 font-bold uppercase'>Visit As a Buyer</h1>
                            </Link>
                            <Link className='shadow-lg px-3 py-4 border border-gray-300 rounded-md tracking-wider hover:scale-110 transition-all delay-100 hover:border-2 hover:border-blue-600'>
                                <img src={`${CLIENT_URL}/assets/icons/magnifying-glass.png`} alt='magnifying-glass' className='w-10 md:w-14 mx-auto'/>
                                <h1 className='mt-4 font-bold uppercase'>Search Product</h1>
                            </Link>
                            <Link className='shadow-lg px-3 py-4 border border-gray-300 rounded-md tracking-wider hover:scale-110 transition-all delay-100 hover:border-2 hover:border-blue-600'>
                                <img src={`${CLIENT_URL}/assets/icons/call.png`} alt='call' className='w-10 md:w-14 mx-auto'/>
                                <h1 className='mt-4 font-bold uppercase'>Contact Seller</h1>
                            </Link>
                            <Link className='shadow-lg px-3 py-4 border border-gray-300 rounded-md tracking-wider hover:scale-110 transition-all delay-100 hover:border-2 hover:border-blue-600'>
                                <img src={`${CLIENT_URL}/assets/icons/trade.png`} alt='trade' className='w-10 md:w-14 mx-auto'/>
                                <h1 className='mt-4 font-bold uppercase'>Sell Your Product</h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default Home