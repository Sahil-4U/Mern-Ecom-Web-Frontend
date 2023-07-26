import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'

function Layout(props) {
    return (
        <div>
            <Header />

            <main style={{ height: '73vh' }}>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout