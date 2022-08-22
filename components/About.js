import Info from "./../images/info-1.png";
import Info2 from "./../images/info-2.png";
import Info3 from "./../images/info-3.png";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
const About = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12 lg:ml-12">
      <div>
        <div>
          <h3 className="text-2xl font-bold">About Us</h3>
          <hr className="w-16 border-[1px] border-[#262E3B] mb-2" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            distinctio placeat ducimus deleniti cumque quae error esse aliquam
            minus architecto?
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            distinctio placeat ducimus deleniti cumque quae error esse aliquam
            minus architecto?
          </p>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-bold">Why Choose Us</h3>
          <hr className="w-12 border-[1px] border-[#262E3B] mb-2" />
          <ul>
            <li className="flex items-center">
              {" "}
              <FaLongArrowAltRight className="mr-2" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              expedita?
            </li>
            <li className="flex items-center">
              {" "}
              <FaLongArrowAltRight className="mr-2" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              expedita?
            </li>
            <li className="flex items-center">
              {" "}
              <FaLongArrowAltRight className="mr-2" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              expedita?
            </li>
          </ul>
        </div>
        <div className="rounded-[25px] bg-gradient-to-r from-primary to-accent text-white w-56 ml-16 mt-16 p-4 relative shadow-xl">
          <div className="flex flex-col justify-center items-center">
            <h4>Contact Us</h4>
            <h5>+01 22 345</h5>
            <small>Email: abc@gmail.com</small>
            <div className="border-2 rounded-[25px] border-gray-600 w-56 h-[98px] absolute left-2 top-2"></div>
            <div className="border-2 rounded-[25px] border-gray-600 w-56 h-[100px] absolute -left-2 -top-2"></div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h2 className="text-2xl font-bold text-center mb-2">Our Services</h2>
          <div>
            <div className="card lg:card-side shadow-xl bg-[#262E3B] rounded-none">
              <figure className="pl-5 pt-5">
                <Image src={Info} width={100} height={100} alt="" />
              </figure>
              <div className="card-body text-white">
                <h2 className="card-title">Lorem ipsum dolor sit amet.</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ducimus, debitis!
                </p>
              </div>
            </div>
            <div className="card lg:card-side shadow-xl bg-[#313B44] rounded-none">
              <figure className="pl-5 pt-5">
                <Image src={Info3} width={100} height={100} alt="" />
              </figure>
              <div className="card-body text-white">
                <h2 className="card-title">Lorem ipsum dolor sit amet.</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ducimus, debitis!
                </p>
              </div>
            </div>
            <div className="card lg:card-side shadow-xl bg-[#34404C] rounded-none">
              <figure className="pl-5 pt-5">
                <Image src={Info2} width={100} height={100} alt="" />
              </figure>
              <div className="card-body text-white">
                <h2 className="card-title">Lorem ipsum dolor sit amet.</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ducimus, debitis!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
