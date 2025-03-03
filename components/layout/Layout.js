import React, { Fragment } from 'react'
import MainHeader from './MainHeader';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <Fragment>
        <MainHeader />
        <main>{props.children}</main>
        <Footer />
    </Fragment>
  )
}

export default Layout;