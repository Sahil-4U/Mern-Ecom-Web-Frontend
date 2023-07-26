import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'

function Layout(props) {
    return (
        <div>
            <Header />

            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout