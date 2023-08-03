import React from "react";
import { Link } from "react-scroll";
import { ArrowSmRightIcon } from "@heroicons/react/outline";
import { GlobeAltIcon, PencilIcon, HeartIcon } from "@heroicons/react/solid";

import supportImg from "../assets/20160729_114944.jpg";
const Services = () => {
  return (
    <div name="Services" className="relative">
      <div className="w-full h-[1240px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supportImg}
          alt="/"
        />
      </div>

      <div className="w-full mx-auto text-white relative">
        <div className="px-4 pt-4">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
            Services
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-6 gap-y-16 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl flex flex-col">
            <div className="p-8 flex-grow">
              <PencilIcon className="w-16 p-4 bg-red-700 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Engineering</h3>
              <ul className="list-disc list-outside ms-8">
                <li className="text-gray-600 text-xl py-0">
                  Review and design of industrial processes with flammable and
                  combustible materials, risk of fire and explosion (NFPA, PFC,
                  CEC/OESC, OBC)
                </li>
                <li className="text-gray-600 text-xl py-0">
                  Building permits for flammable/combustible industrial
                  processes - paint systems (booths, lines and ovens), dust
                  collection system
                </li>
                <li className="text-gray-600 text-xl py-0">
                  Chemical process + Fire Safety (OBC, CEC, NFPA) for Industrial
                  Processes
                </li>
                <li className="text-gray-600 text-xl py-0">
                  Dust Hazard Analysis (DHA) for Industrial Processes +
                  Operations (NFPA 61, 484, 652, 654)
                </li>
                <li className="text-gray-600 text-xl py-0">
                  Electrical Classification Assessments for ESA (CEC, OESC, NFPA
                  497, 499)
                </li>
                <li className="text-gray-600 text-xl py-0">
                  Safety Ventilation Calculations following NFPA 86 for TSSA
                </li>
              </ul>
            </div>
            <div className="bg-slate-100 pl-8 py-4 rounded-xl">
              <p className="flex text-indigo-600">
                <Link
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="cursor-pointer flex flex-row"
                >
                  Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
                </Link>
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl flex flex-col">
            <div className="p-8 flex-grow">
              <HeartIcon className="w-16 p-4 bg-yellow-400 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Health and Safety</h3>
              <ul className="list-disc list-outside ms-8">
                <li className="text-gray-600 text-xl py-0">
                  Pre-Start Health and Safety Reviews
                </li>
                <li className="text-gray-600 text-xl py-0">
                  Industrial Hygiene and Indoor Air Quality
                </li>
                <li className="text-gray-600 text-xl py-0">
                  Chemical process + Fire Safety (OBC, CEC, NFPA) for Industrial
                  Processes
                </li>
                <li className="text-gray-600 text-xl py-0">
                  Process Hazard Analysis (PHA), Dust Hazard Analysis (DHA),
                  HAZOP Risk Assessment
                </li>
              </ul>
            </div>
            <div className="bg-slate-100 pl-8 py-4 rounded-xl">
              <p className="flex text-indigo-600">
                <Link
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="cursor-pointer flex flex-row"
                >
                  Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
                </Link>
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl flex flex-col">
            <div className="p-8 flex-grow">
              <GlobeAltIcon className="w-16 p-4 bg-green-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Environmental</h3>
              <ul className="list-disc list-outside ms-8">
                <li className="text-gray-600 text-xl py-0">
                  Environmental Activity and Sector Registry (EASR) Air, Noise,
                  Odour
                </li>
                <li className="text-gray-600 text-xl py-0">
                  Environmental Compliance Approvals
                </li>
                <li className="text-gray-600 text-xl py-0">
                  Air Modelling and Odour Assessments
                </li>
                <li className="text-gray-600 text-xl py-0">
                  Noise and Vibration Assessments
                </li>
                <li className="text-gray-600 text-xl py-0">
                  Environmental Reporting (NPRI, E2, P2, GHG)
                </li>
                <li className="text-gray-600 text-xl py-0">
                  Land use Compatibility - Air, Noise, Odour
                </li>
              </ul>
            </div>
            <div className="bg-slate-100 pl-8 py-4 rounded-xl">
              <p className="flex text-indigo-600">
                <Link
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="cursor-pointer flex flex-row"
                >
                  Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
