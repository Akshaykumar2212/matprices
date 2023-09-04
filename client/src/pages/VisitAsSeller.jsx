import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { useContextProvider } from '../contexts/ContextProvider'

const VisitAsSeller = () => {
    const { APP_NAME } = useContextProvider();
    document.title = APP_NAME+"VISIT AS SELLER";
    return (
        <MainLayout>
            <section className='p-6'>
                <h1>sadasd</h1>
            </section>
        </MainLayout>
    )
}

export default VisitAsSeller