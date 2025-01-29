import React from 'react';

function Layout({children}) {
  return (
    <>
      <Header />
        <div>{children}</div>
      <Footer />
    </>
  )
}

export default Layout