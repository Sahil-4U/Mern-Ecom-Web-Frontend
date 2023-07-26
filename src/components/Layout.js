import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer';
import { Helmet } from 'react-helmet';

function Layout({ children, description, title, keyword, author }) {
    return (
        <div>
            <Helmet>
                <meta charSet="UTF-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keyword} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
            <Header />

            <main style={{ height: '73vh' }}>
                {children}
            </main>
            <Footer />
        </div>
    )
}
Layout.defaultProps = {
    title: "Ecommerce-app:--shop now",
    description: "mern ecom project ",
    keyword: "mern,react,node,mongodb",
    author: 'sahil sharma'
}

export default Layout