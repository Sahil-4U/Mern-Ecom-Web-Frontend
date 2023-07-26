import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'

function Layout(props) {
    return (
        <div>
            <Header />

            <main style={{ minHeight: '68.5vh' }}>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout