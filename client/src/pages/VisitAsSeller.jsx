import React, { Fragment } from 'react';
import MainLayout from '../layouts/MainLayout';
import { useContextProvider } from '../contexts/ContextProvider';
import { InputText } from 'primereact/inputtext';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Divider } from 'primereact/divider';

const VisitAsSeller = () => {
    const { APP_NAME } = useContextProvider();
    document.title = APP_NAME+"VISIT AS SELLER";
    const lists = [
        { code : 'MP61f50fff87e75', city : 'Pune' },
        { code : 'MP61f50fff87e75', city : 'Kolhapur' },
        { code : 'MP61f50fff87e75', city : 'Satara' },
        { code : 'MP61f50fff87e75', city : 'Nashik' },
        { code : 'MP61f50fff87e75', city : 'Jalgaon' },
        { code : 'MP61f50fff87e75', city : 'Mumbai' },
        { code : 'MP61f50fff87e75', city : 'Thane' },
        { code : 'MP61f50fff87e75', city : 'Navi Mumbai' },
        { code : 'MP61f50fff87e75', city : 'Ratnagiri' },
        { code : 'MP61f50fff87e75', city : 'Sindhudurg' },
        { code : 'MP61f50fff87e75', city : 'Beed' },
        { code : 'MP61f50fff87e75', city : 'Dhule' },
    ];
    return (
        <MainLayout>
            <section>
                <div className='bg-blue-600 px-10 py-6 text-white flex flex-col-reverse md:flex-row gap-4 justify-between items-center'>
                    <h1 className='text-2xl md:text-3xl uppercase font-extrabold tracking-widest'>Visit As Seller</h1>
                    <span className="p-input-icon-left search">
                        <AiOutlineSearch className='text-xl'/>
                        <InputText placeholder="Search" type="text" className='rounded-[2rem!important] pt-[8px!important] pb-[10px!important] pr-[20px!important] pl-[2.4rem!important] -mt-1'/>
                    </span>
                </div>
                <div className='px-10 py-8 grid grid-cols-2 md:grid-cols-5 gap-6'>
                    {lists.map((data,id)=>{
                        return(<Fragment key={id}>
                            <Link className='px-5 py-4 border border-gray-400 shadow-md hover:scale-110 transition-all delay-200 rounded-lg group hover:bg-blue-600 hover:text-white'>
                                <h1 className='uppercase text-center md:text-lg font-bold tracking-wide'>{data.code}</h1>
                                <Divider className='my-[0.8rem!important]'/>
                                <p className='text-center uppercase font-bold md:text-lg'>City : {data.city}</p>
                                <div className='w-full pt-1.5 pb-2 px-3 text-center bg-blue-600 group-hover:bg-white group-hover:text-blue-600 text-white rounded-md transition-all delay-200 mt-4'>View Details</div>
                            </Link>
                        </Fragment>)
                    })}
                </div>
            </section>
        </MainLayout>
    )
}

export default VisitAsSeller