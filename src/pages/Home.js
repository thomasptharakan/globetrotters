import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Select from 'react-select';
import countryList from "react-select-country-list";
import { useMemo } from "react";

export default function Home() {

  //Initialise  navigate  
  const navigate = useNavigate();
  //Set Country Variable
  const [country, setCountry] = useState("");
  //Initialise countryList data
  const options = useMemo(() => countryList().getData(), [])

  //Handle Country change function
  const handleCountryInput = value => {
    setCountry(value);
    console.log(value.label);
  }

  //Handle Submit function
  function handleEvent(event) {
    event.preventDefault();
    if (country!== ""){
      //Navigate to results page
      navigate("/Results",{
        //Set props for pass to Results page
        state:{
          location:country.label
        }
      });
    }else{
      //Alert user has not entered Data
       alert("Numpty");
    }
    
  }
  return (
    //Return HomePage
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56" style={{ padding: 0 }}>
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Developed by Team GlobeTrotter.{' '}
              <NavLink to="About" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                About Us <span aria-hidden="true">&rarr;</span>
              </NavLink>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Find Details about any Country in the World
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Be a GlobeTrotter and find details about your next destination
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form>
                  <div className="card-body">
                    <div className="form-control">
                      <Select options={options} value={country} onChange={handleCountryInput} />
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-accent" onClick={handleEvent}>Search</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <svg
            className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}
