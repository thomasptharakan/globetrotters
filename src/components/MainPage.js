import React from 'react'
import NavBar from '../components/NavBar';
import NavPage from '../components/NavPage';

const MainPage = () => {
  return (
    <React.Fragment>
        <section>
            {/* NavBar Section */}
            <div>
                <NavBar />
            </div>
        </section>
        <section>
            {/* NavPage Section */}
            <NavPage />
        </section>
    </React.Fragment>

  )
}

export default MainPage;