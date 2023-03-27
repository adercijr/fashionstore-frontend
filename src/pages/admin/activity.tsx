import Input from '@/components/utils/Input'
import TextArea from '@/components/utils/TextArea'
import Label from '@/components/utils/Label'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Select from '@/components/utils/Select'
import AdminMenuAside from '@/components/admin/AdminMenuAside'
import Button from '@/components/utils/Button'
import useAxios from 'axios-hooks'
import axios from 'axios'
import AdminTable from '@/components/admin/AdminTable'

type ActivityType = {
    id: number
    name: string
}
interface FormDataType {
    name: string
}

const Activity = () => {
    const [name, setName] = useState<string>('')
    const [idEdit, setIdEdit] = useState<number>()
    const [typeOfRequest, setTypeOfRequest] = useState<'post' | 'put'>('post')
    const [activities, setActivities] = useState<Array<ActivityType>>()

    const newFetch = () => {
        axios
            .get(`http://localhost:8000/api/admin/activity`)
            .then((data) => setActivities(data.data))
    }

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/admin/activity')
            .then((data) => setActivities(data.data))
    }, [])

    const onsubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        switch (typeOfRequest) {
            case 'post':
                axios
                    .post(
                        'http://localhost:8000/api/admin/activity',
                        {
                            name: name
                        },
                        {
                            headers: {
                                'Content-Type':
                                    'application/x-www-form-urlencoded'
                            }
                        }
                    )
                    .then(() => afterCreate())
                const afterCreate = () => {
                    newFetch()
                    cancelEdit()
                }

                break
            case 'put':
                axios
                    .put(
                        `http://localhost:8000/api/admin/activity/${idEdit}`,
                        {
                            name: name
                        },
                        {
                            headers: {
                                'Content-Type':
                                    'application/x-www-form-urlencoded'
                            }
                        }
                    )
                    .then(() => afterEdit())

                const afterEdit = () => {
                    newFetch()
                    cancelEdit()
                }
                break
        }
    }

    const handleDelete = async (id: number) => {
        await axios.delete(`http://localhost:8000/api/admin/activity/${id}`, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })

        newFetch()
    }

    const handleEdit = async (id: number) => {
        setTypeOfRequest('put')

        const setEdit = (data) => {
            setIdEdit(data.data.id)
            setName(data.data.name)
        }

        axios
            .get(`http://localhost:8000/api/admin/activity/${id}`)
            .then((data) => setEdit(data))
    }

    const cancelEdit = () => {
        setName('')
        setTypeOfRequest('post')
    }

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Administration
                </h2>
            }
        >
            <Head>
                <title>Laravel - Admin - Activity</title>
            </Head>
            <div className="flex flex-row">
                <AdminMenuAside className="bg-red-300 w-96" />

                <div className="flex w-full flex-col space-y-1">
                    <div className="flex flex-col mx-52 max-w-3xl space-y-2 ">
                        <h1 className="text-2xl py-4">Activities</h1>

                        <form onSubmit={onsubmitHandler} className="space-y-2">
                            <Label>Name:</Label>
                            <Input
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />

                            {typeOfRequest === 'post' ? (
                                <Button styled="default">Create</Button>
                            ) : (
                                <div className="space-x-4">
                                    <Button
                                        type="reset"
                                        className="w-26"
                                        onClick={() => cancelEdit()}
                                    >
                                        Cancel
                                    </Button>
                                    <Button className="bg-green-700 w-24">
                                        Save
                                    </Button>
                                </div>
                            )}
                        </form>
                        <div className="pt-12">
                            <AdminTable
                                rows={activities}
                                header={['name', 'action']}
                                handleDel={(id) => handleDelete(id)}
                                handleEdit={(id) => handleEdit(id)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Activity
