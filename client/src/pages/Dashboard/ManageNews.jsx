import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { BsFillPlusSquareFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import { listNews } from "../../redux/actions/dashNews"
import { useState } from "react"

const ManageNews = () => {
	const news = useSelector(state => state.dashNews.newsList)
	const dispatch = useDispatch()
	let [page, setPage] = useState(0)
	useEffect(() => {
		dispatch(listNews(page))
	}, [page])

	return (
		<>
			<Link
				to="/admin/dashboard/newsedit"
				className="text-white flex gap-4 my-4 mx-auto w-2/4 text-2xl bg-green-700 py-2 px-4 rounded justify-center cursor-pointer"
			>
				<BsFillPlusSquareFill className="ml-4 text-[1.8rem] " />
				<h2>Create news</h2>
			</Link>
			<div className="">
				<div className="flex flex-col">
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
										{news[page] &&
											Object.keys(news[page]).map(nws => {
												let khabar = news[page][nws]
												return (
													<tr
														key={nws}
														className="border-b"
													>
														<td>
															{parseInt(nws) + 1}
														</td>
														<td className="truncate">
															{khabar.title
																? khabar.title
																: ""}
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
																		","
																  )
																: ""}
														</td>
													</tr>
												)
											})}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ManageNews
