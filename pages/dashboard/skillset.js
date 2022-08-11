import DashboardLayout from '../../components/DashboardLayout'
import { FiEdit, FiPlus } from "react-icons/fi";
import { TiPointOfInterest } from "react-icons/ti";
import { MdDelete } from "react-icons/md";

const Index = () => {
    return <DashboardLayout>
        <div className='flex justify-between items-center mx-12 mt-8 mb-4'>
            <h3 className="uppercase font-semibold">SKILLS</h3>
            <div>
                <label
                    htmlFor="my-modal-8"
                    className="btn modal-button border-0 bg-transparent hover:bg-transparent"
                >
                    <div className="flex items-center gap-2 text-secondary cursor-pointer">
                        <FiPlus></FiPlus>
                        <p>Add Skill</p>
                    </div>
                </label>
                <input type="checkbox" id="my-modal-8" className="modal-toggle" />
                <div className="modal modal-middle">
                    <div className="modal-box">
                        <form action="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">ADD SKILL</span>
                                </label>
                                <input
                                    type="text"
                                    name="skill"
                                    placeholder="Add skill"
                                    className="input input-bordered w-full"
                                />
                            </div>
                        </form>
                        <div className="modal-action">
                            <label htmlFor="my-modal-8" className="btn btn-error">
                                Cancel
                            </label>
                            <label
                                type="submit"
                                htmlFor="my-modal-8"
                                className="btn btn-success"
                            >
                                Done
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr />

        <div>

            <div className="grid grid-cols-4">
                <div className="flex items-center gap-2 mt-5">
                    <TiPointOfInterest></TiPointOfInterest>
                    <p>HTML5</p>
                    <FiEdit className="cursor-pointer text-secondary"></FiEdit>
                    <MdDelete className="cursor-pointer text-red-500"></MdDelete>
                </div>
                <div className="flex items-center gap-2 mt-5">
                    <TiPointOfInterest></TiPointOfInterest>
                    <p>HTML5</p>
                    <FiEdit className="cursor-pointer text-secondary"></FiEdit>
                    <MdDelete className="cursor-pointer text-red-500"></MdDelete>
                </div>
                <div className="flex items-center gap-2 mt-5">
                    <TiPointOfInterest></TiPointOfInterest>
                    <p>HTML5</p>
                    <FiEdit className="cursor-pointer text-secondary"></FiEdit>
                    <MdDelete className="cursor-pointer text-red-500"></MdDelete>
                </div>
                <div className="flex items-center gap-2 mt-5">
                    <TiPointOfInterest></TiPointOfInterest>
                    <p>HTML5</p>
                    <FiEdit className="cursor-pointer text-secondary"></FiEdit>
                    <MdDelete className="cursor-pointer text-red-500"></MdDelete>
                </div>
                <div className="flex items-center gap-2 mt-5">
                    <TiPointOfInterest></TiPointOfInterest>
                    <p>HTML5</p>
                    <FiEdit className="cursor-pointer text-secondary"></FiEdit>
                    <MdDelete className="cursor-pointer text-red-500"></MdDelete>
                </div>
                <div className="flex items-center gap-2 mt-5">
                    <TiPointOfInterest></TiPointOfInterest>
                    <p>HTML5</p>
                    <FiEdit className="cursor-pointer text-secondary"></FiEdit>
                    <MdDelete className="cursor-pointer text-red-500"></MdDelete>
                </div>
                <div className="flex items-center gap-2 mt-5">
                    <TiPointOfInterest></TiPointOfInterest>
                    <p>HTML5</p>
                    <FiEdit className="cursor-pointer text-secondary"></FiEdit>
                    <MdDelete className="cursor-pointer text-red-500"></MdDelete>
                </div>
            </div>
        </div>
    </DashboardLayout>
}

export default Index
