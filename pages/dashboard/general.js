import DashboardLayout from '../../components/DashboardLayout'

const Index = () => (
    <DashboardLayout>
        <div className='bg-[#F6F6F6] px-4'>
            <div className="sm:pt-8">
                <div >
                    <div className='flex items-center ml-12'>
                        <div className="avatar">
                            <div className="w-16 rounded-xl">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div>
                        <div className='ml-4'>
                            <h2 className='text-xl'>User Name</h2>
                            <h4>user.abc@gmail.com</h4>
                        </div>
                    </div>
                    <h2 className='my-4 ml-12'>General</h2>
                </div>
                <div className="mt-2 bg-[#ffffff] p-4 mx-12">
                    <div className="max-w-4xl">
                        <label className="block">
                            <span className="block font-medium text-sm text-gray-900 leading-tight">
                                Citizenship
                            </span>
                            <div className="mt-2">
                                <select className="select select-primary w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white">
                                    <option selected>Bangladeshi</option>
                                    <option>Foreigner</option>
                                </select>
                            </div>
                        </label>
                        <label className="block mt-2">
                            <span className="block font-medium text-sm text-gray-900 leading-tight">
                                Gender
                            </span>
                            <div className="mt-2">
                                <select className="select select-primary w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white">
                                    <option selected>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                        </label>
                        <label className="block mt-5">
                            <span className="block font-medium text-sm text-gray-900 leading-tight">
                                Current Location
                            </span>
                            <div className="mt-2">
                                <input
                                    className="block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
                                    placeholder="English"
                                />
                            </div>
                        </label>
                        <label className="block mt-5">
                            <span className="block font-medium text-sm text-gray-900 leading-tight">
                                Phone
                            </span>
                            <div className="mt-2">
                                <input
                                    className="block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
                                    placeholder="Ex - (+880)-1234567890"
                                />
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <div className="border-t-2 border-gray-200 px-0 py-5 flex justify-end">
                <button
                    type="button"
                    className="px-4 py-3 leading-none font-semibold rounded-lg bg-gray-300 text-gray-900 hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
                >
                    Cancel
                </button>
                <button
                    type="button"
                    className="ml-4 px-6 py-3 leading-none font-semibold rounded-lg bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:bg-gray-900"
                >
                    Save
                </button>
            </div>
        </div>
    </DashboardLayout>
)

export default Index
