import React from 'react';
import Image from 'next/image'

function Header() {

    return (
        <>
            <header className="header">
                {/* Top nav */}
                <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                    <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                        <Image
                            onClick={ () =>router.push('/') }
                            src='https://links.papareact.com/f90'
                            width={150}
                            height={40}
                            objectFit="contain"
                            className="cursor-pointer"
                        />
                    </div>
                </div>

            </header>
        </>
    );
}

export default Header;