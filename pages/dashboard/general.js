import DashboardLayout from '../../components/DashboardLayout'

const Index = () => (
    <DashboardLayout>
        <div className='bg-[#F6F6F6] mx-8 lg:mx-0'>
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
                </div>
                <div className="bg-white lg:w-2/3 lg:rounded-l-lg mx-6 lg:mt-8 lg:mx-auto px-6 lg:px-0 lg:mx-0 lg:px-20">
                    <div className="text-3xl text-gray-700 py-6">Edit Info</div>
                    <hr className="-mx-20" />
                    <div className="py-8">
                        <div className="flex mb-4">
                            <span
                                className="flex items-center justify-center block rounded-full border border-blue-500 h-6 w-6 text-xs font-bold text-blue-500 mr-3">1</span>
                            <span className="font-bold text-gray-800">Personal Information</span>
                        </div>
                        <div className="lg:flex mb-2 -mx-1">
                            <div className="lg:w-1/2 mb-3 lg:mb-2 mx-1">
                                <div className="px-1">
                                    <label className="text-gray-600 font-light">First Name</label>
                                    <input type='text'
                                        className="w-full mt-1 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500" />
                                </div>
                            </div>
                            <div className="lg:w-1/2  mb-3 lg:mb-2 mx-1">
                                <div className="px-1">
                                    <label className="text-gray-600 font-light">Last Name</label>
                                    <input type='text'
                                        className="w-full mt-1 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500" />
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-2/3">
                            <div className="px-1">
                                <label className="text-gray-600 font-light">Email</label>
                                <input type='email'
                                    className="w-full mt-1 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500" />
                            </div>
                        </div>
                    </div>

                    <div className="py-8">
                        <div className="flex mb-4">
                            <span
                                className="flex items-center justify-center block rounded-full border border-blue-500 h-6 w-6 text-xs font-bold text-blue-500 mr-3">2</span>
                            <span className="font-bold text-gray-800">Address Information</span>
                        </div>
                        <div className="lg:flex mb-2 -mx-1">
                            <div className="lg:w-1/2 mb-3 lg:mb-2 mx-1">
                                <div className="px-1">
                                    <label className="text-gray-600 font-light">Country</label>
                                    <input type='text'
                                        className="w-full mt-1 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500" />
                                </div>
                            </div>
                            <div className="lg:w-1/2 mb-3 lg:mb-2 mx-1">
                                <div className="px-1">
                                    <label className="text-gray-600 font-light">Street Address</label>
                                    <input type='text'
                                        className="w-full mt-1 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500" />
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-2/3">
                            <div className="px-1">
                                <label className="text-gray-600 font-light">State</label>
                                <input type='email'
                                    className="w-full mt-1 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500" />
                            </div>
                        </div>
                    </div>
                    <hr className="-mx-20" />
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
            </div>
        </div>
    </DashboardLayout>
)

export default Index
