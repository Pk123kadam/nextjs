"use client"

import { getTask } from '@/services/taskService'
import React, { useEffect, useState } from 'react'

function Show() {
    const [data, setData] = useState([])
    useEffect(() => {
        let call = async () => {
            let task = await getTask()
            setData(task)
        }
        call()

    }, [])
    return (
        <div>
            <table>
                <thead>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Status</th>
                </thead>
                <tbody>
                    {
                        data?.map((e) => {
                            return <>
                                <tr>
                                    <td>{e.title}</td>
                                    <td>{e.content}</td>
                                    <td>{e.status}</td>
                                </tr>
                            </>
                        })
                    }

                </tbody>
            </table>

        </div>
    )
}

export default Show