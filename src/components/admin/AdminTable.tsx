import CapitalFirstLetter from '@/utils/CapitalFirstLetter'
import Button from '../utils/Button'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Pagiantion from '../utils/Pagiantion'

const AdminTable = ({ rows, header, handleDel, handleEdit }): JSX.Element => {
    const [page, setPage] = useState(0)
    const [rowWithPagination, setRowWithPagination] = useState(0)

    useEffect(() => {
        const elementsOfPagination = Pagiantion(page)
        console.log(rows.slice())
    }, [rows])

    return (
        <table className=" w-full bg-zinc-100 border-2 shadow-lg text-gray-800 ">
            <thead>
                <tr>
                    {header &&
                        header.map((head) => {
                            return (
                                <th key={head}>{CapitalFirstLetter(head)}</th>
                            )
                        })}
                </tr>
            </thead>
            <tbody>
                {rows &&
                    rows.map((act) => {
                        return (
                            <tr
                                key={act.id}
                                className="border-4 hover:bg-gray-800 hover:text-white"
                            >
                                <td className=" w-full px-3">{act.name}</td>
                                <td className="space-x-3  w-44 flex justify-center align-middle mx-auto">
                                    <Button
                                        className="text-black hover:bg-yellow-500 bg-yellow-400"
                                        color="bg-yellow-400"
                                        onClick={() => handleEdit(act.id)}
                                        styled="custom"
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        className="bg-red-700 text-white hover:bg-red-900"
                                        onClick={() => handleDel(act.id)}
                                        styled="custom"
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        )
                    })}
            </tbody>
            <tfoot>
                <tr className="bg-red-400 flex-1">
                    {rows && rows.length - 5 > 5 && <p>{rows.length}</p>}
                </tr>
            </tfoot>
        </table>
    )
}

export default AdminTable
