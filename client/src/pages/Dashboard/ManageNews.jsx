import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BsFillPlusSquareFill } from 'react-icons/bs'
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import { listNews } from '../../redux/actions/dashNews'
import { DashActions, FormSelect } from '../../components/common'

const categories = [
    'All',
    'POLITICS',
    'BUSINESS',
    'SPORTS',
    'ENTERTAINMENT',
    'STORY',
    'FINANCE',
    'GLOBAL',
    'BUSINESS',
    'HEALTH',
    'TECHNOLOGY',
]
const initState = { page: 0, category: 'All' }

const ManageNews = () => {
    const news = useSelector(state => state.news.newsList)
    const dispatch = useDispatch()
    // let [page, setPage] = useState(0)
    let [values, setValues] = useState(initState)

    useEffect(() => {
        dispatch(listNews(values))
    }, [values])

    const handleChange = e => {
        setValues({ ...values, [e.target.name]: e.target.value, page: 0 })
    }
    return (
        <>
            <Link to="/admin/dashboard/addNews" className="addNew">
                <BsFillPlusSquareFill className="ml-4 text-[1.8rem] " />
                <h2>Create news</h2>
            </Link>
            <div className="flex flex-col">
                <div className="flex ml-2 place-items-center gap-16">
                    <FormSelect
                        name={'category'}
                        options={categories}
                        handleChange={handleChange}
                    />
                    <div className="flex">
                        <AiOutlineCaretLeft
                            className="cursor-pointer hover:text-rose-700 text-3xl"
                            onClick={e =>
                                setValues({
                                    ...values,
                                    page:
                                        values.page == 0
                                            ? values.page
                                            : values.page - 1,
                                })
                            }
                        />
                        <span className="py-1 px-2 bg-cyan-900 place-items-center rounded text-white">
                            Page {values.page + 1}
                        </span>
                        <AiOutlineCaretRight
                            className="cursor-pointer hover:text-rose-700 text-3xl"
                            onClick={e =>
                                setValues({ ...values, page: values.page + 1 })
                            }
                        />
                    </div>
                </div>
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="newsListTable min-w-full table-auto">
                                <thead className="border-b">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Date Modified</th>
                                        <th scope="col">Hits</th>
                                        <th scope="col">Categories</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {news[values.page] &&
                                        Object.keys(news[values.page]).map(
                                            nws => {
                                                let khabar =
                                                    news[values.page][nws]
                                                return (
                                                    <tr
                                                        key={nws}
                                                        className="border-b"
                                                    >
                                                        <td>
                                                            {parseInt(nws) + 1}
                                                        </td>
                                                        <td className="truncate">
                                                            <Link
                                                                to={`/news/${khabar.year}/${khabar.month}/${khabar.slug}`}
                                                                target="_blank"
                                                            >
                                                                {khabar.title
                                                                    ? khabar.title
                                                                    : ''}
                                                            </Link>
                                                        </td>
                                                        <td>
                                                            {new Date(
                                                                khabar.updatedAt
                                                            ).toLocaleDateString()}
                                                        </td>
                                                        <td>{khabar.hits}</td>
                                                        <td>
                                                            {khabar.category
                                                                ? khabar.category.join(
                                                                      ','
                                                                  )
                                                                : ''}
                                                        </td>
                                                        <td>
                                                            <DashActions
                                                                year={
                                                                    khabar.year
                                                                }
                                                                month={
                                                                    khabar.month
                                                                }
                                                                slug={
                                                                    khabar.slug
                                                                }
                                                                id={khabar._id}
                                                            />
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageNews
