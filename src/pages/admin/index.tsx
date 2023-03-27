import Input from '@/components/utils/Input'
import TextArea from '@/components/utils/TextArea'
import Label from '@/components/utils/Label'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import React, { useState } from 'react'
import Select from '@/components/utils/Select'
import AdminMenuAside from '@/components/Layouts/AdminMenuAside'

const Dashboard = () => {
    const [name, setName] = useState()
    const [brand, setBrand] = useState()
    const [description, setDescription] = useState()
    const [category, setCategory] = useState()
    const [style, setStyle] = useState()
    const [activity, setActivity] = useState()
    const [gender, setGender] = useState()

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Administration
                </h2>
            }
        >
            <Head>
                <title>Laravel - Admin</title>
            </Head>
            <div className="flex flex-row bg-green-600">
                <AdminMenuAside className="bg-red-300 w-96" />
                <div className="w-full flex-col space-y-1 bg-slate-400">
                    <h1 className="text-2xl py-4">Product</h1>
                    <Label>Name:</Label>
                    <Input />
                    <Label>Description:</Label>
                    <TextArea />
                    <Label>Brand:</Label>
                    <Select options={['teste']} />
                    <Label>Category:</Label>
                    <Select options={['teste']} />
                    <Label>Style:</Label>
                    <Select options={['teste']} />
                    <Label>Activity:</Label>
                    <Select options={['teste']} />
                    <Label>Gender:</Label>
                    <Select options={['teste']} />
                </div>
            </div>
        </AppLayout>
    )
}

export default Dashboard
