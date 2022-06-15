import React from 'react'


function Footer() {
    return (
        <>
            <div className="overlay toggle-icon"></div>
            <a href="javascript:;" className="back-to-top"><i className='bx bxs-up-arrow-alt'></i></a>
            <footer className="page-footer">
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <p className="mb-0">© CryptoPass 2022</p>
                </div>
            </footer>
        </>
    )
}

export default Footer