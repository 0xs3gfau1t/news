import React from 'react'
import NavBar from './NavBar'
import TopCritics from './Critics/TopCritics'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import { SqAds } from '../common'

function LeftSideBar() {
    return (
        <div className="flex flex-col">
            <div className="my-4">
                <Link
                    className="poll-button w-28 text-lg text-white px-4 py-2 rounded-md flex items-center justify-center"
                    to={'/polls'}
                >
                    हजुरको मत
                </Link>
                <Link
                    className="w-28 text-lg px-4 text-red py-2 rounded-md flex mt-4 items-center justify-center"
                    to={'/archive'}
                >
                    संग्रहित
                </Link>
            </div>
            <SearchBar />
            <NavBar />
            <div className="w-full">
                <TopCritics />
            </div>
            <div className="w-full">
                <SqAds />
            </div>
        </div>
    )
}

export default LeftSideBar
