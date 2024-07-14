import React, { useEffect } from "react";
import { Link ,useParams} from "react-router-dom"
import Back from "../common/back/Back";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { explore_mentors } from '../../dummydata';

import "./team.css";
const features = [
  { name: "1-Rank", description: "Designed by Good Goods, Inc." },
  {
    name: "Amazon",
    description:
      "Solid walnut base with rare earth magnets and powder coated steel card cover",
  },
  { name: "Facebook", description: '6.25" x 3.55" x 1.15"' },
  { name: "NITK", description: "Hand sanded and finished with natural oil" },
  {
    name: "8 Years Experience",
    description: "Wood card tray and 3 refill packs",
  },
  {
    name: "Business Consultant",
    description:
      "Made from natural materials. Grain and color vary with each item.",
  },
];

//payment handler

const TeamPersonal = () => {
  const amount = 100000;
  const currency = "INR";
  const receiptId = "qwsaq1";

  const { id } = useParams();
  const filteredMentor = explore_mentors.find(mentor => mentor.id === parseInt(id));
 
  // const filteredMentor = explore_mentors.filter(mentor => mentor.id === id);
  const paymentHandler = async (e) => {
    const response = await fetch("http://localhost:5000/api/user/order", {
      method: "POST",
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const order = await response.json();
    console.log(order);

    var options = {
      key: "rzp_test_Bnzoa0XUygJdVJ", // Enter the Key ID generated from the Dashboard
      amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency,
      name: "Acme Corp", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response) {
        const body = {
          ...response,
        };

        const validateRes = await fetch(
          "http://localhost:5000/api/user/order/validate",
          {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const jsonRes = await validateRes.json();
        console.log(jsonRes);
      },
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        name: "Web Dev Matrix", //your customer's name
        email: "webdevmatrix@example.com",
        contact: "9000000000", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    e.preventDefault();
  };
  return (
    <>
      <Back title="Demo Lectures" />

      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 border mt-5">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img
            className="mx-auto h-12"
            src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
            alt=""
          />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                {filteredMentor.description}
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-10 w-10 rounded-full"
                src={filteredMentor.image}
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">{filteredMentor.name}</div>
                <svg
                  viewBox="0 0 2 2"
                  width={3}
                  height={3}
                  aria-hidden="true"
                  className="fill-gray-900"
                >
                  {/* <circle cx={1} cy={1} r={1} /> */}
                </svg>
                {/* <div className="text-gray-600">CEO of Workcation</div> */}
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
      <div className="bg-white border ">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {filteredMentor.name}
              </h2>
              <p className="mt-4 text-gray-500">
              {filteredMentor.description}
              </p>
              <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className="border-t border-gray-200 pt-4"
                  >
                    <dt className="font-medium text-gray-900">
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="h-full w-full relative">
              <img
                src={filteredMentor.image}
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="rounded-lg bg-gray-100 object-cover h-full w-full"
              />
            </div>

            


          </div>

        </div>
      </div>

        {/* video */}
            <div className="h-full w-full relative ">
            <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "40px",
                  fontWeight: "bold",
                  color: "#333",
                  padding: "20px",
                  backgroundColor: "#f7f7f7",
                  borderRadius: "10px",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                  margin: "40px auto",
                  
                }}
              >
                Demo lecture
              </div>
              <iframe
                style={{
                  borderRadius: "30px",
                  position: "relative",
                  margin: "0 auto",
                  width:'80vw',
                  height:'80vh'
                }}
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
                src={`https://www.youtube.com/embed/1ibsQrnuEEg?enablejsapi=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
      <div>
        <div class="bg-white py-24 sm:py-32">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl sm:text-center">
              <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Buy the Course
              </h2>
              <p class="mt-6 text-lg leading-8 text-gray-600">
                Distinctio et nulla eum soluta et neque labore quibusdam. Saepe
                et quasi iusto modi velit ut non voluptas in. Explicabo id ut
                laborum.
              </p>
            </div>
            <div class="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div class="p-8 sm:p-10 lg:flex-auto">
                <h3 class="text-2xl font-bold tracking-tight text-gray-900">
                  2 year membership
                </h3>
                <p class="mt-6 text-base leading-7 text-gray-600">
                  Lorem ipsum dolor sit amet consect etur adipisicing elit.
                  Itaque amet indis perferendis blanditiis repellendus etur
                  quidem assumenda.
                </p>
                <div class="mt-10 flex items-center gap-x-4">
                  <h4 class="flex-none text-sm font-semibold leading-6 text-indigo-600">
                    What’s included
                  </h4>
                  <div class="h-px flex-auto bg-gray-100"></div>
                </div>
                <ul
                  role="list"
                  class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                >
                  <li class="flex gap-x-3">
                    <svg
                      class="h-6 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Private forum access
                  </li>
                  <li class="flex gap-x-3">
                    <svg
                      class="h-6 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Member resources
                  </li>
                  <li class="flex gap-x-3">
                    <svg
                      class="h-6 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Entry to annual conference
                  </li>
                  <li class="flex gap-x-3">
                    <svg
                      class="h-6 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Official member t-shirt
                  </li>
                </ul>
              </div>
              <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                  <div class="mx-auto max-w-xs px-8">
                    <p class="text-base font-semibold text-gray-600">
                      Pay once, own it forever
                    </p>
                    <p class="mt-6 flex items-baseline justify-center gap-x-2">
                      <span class="text-5xl font-bold tracking-tight text-gray-900">
                        ₹1000
                      </span>
                      <span class="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                        INR
                      </span>
                    </p>
                    <button
                      onClick={paymentHandler}
                      class="mt-10 block w-full rounded-md bg-indigo-600 
            px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get access
                    </button>

                    <div>
                      <Link to="/chat" 
                        class="mt-2 block w-full rounded-md bg-indigo-600 
            px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Chat with Mentor
                      </Link>
                    </div>

                    <p class="mt-6 text-xs leading-5 text-gray-600">
                      Invoices and receipts available for easy company
                      reimbursement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border  mt-5 px-6 py-12">
        <h2 className="text-3xl font-bold tracking-tight text-white text-center bg-black rounded-lg py-4 px-6 animate-fade-in mb-6">
          Pick a Date
        </h2>
        <div className="mx-auto max-w-7xl h-full relative overflow-hidden rounded-lg shadow-xl">
          <Calendar
            className="w-full h-full"
            style={{ borderRadius: "inherit" }}
          />
        </div>
      </div>
      <h2 className="text-3xl mt-5 font-bold tracking-tight text-white text-center bg-black rounded-lg py-4 px-6 animate-fade-in mb-6">
        Pick a Time
      </h2>
      <div className="flex justify-around mt-2 mb-5">
        <button
          className="inline-flex items-center rounded-md bg-black px-10 py-3 text-xs font-medium text-white shadow-md hover:bg-gray-900 transition duration-300"
          onClick={(e) => {
            const buttons = document.querySelectorAll("button");
            buttons.forEach((button) => button.classList.remove("active"));
            e.target.classList.add("active");
          }}
        >
          20 May
        </button>
        <button
          className="inline-flex items-center rounded-md bg-black px-10 py-3 text-xs font-medium text-white shadow-md hover:bg-gray-900 transition duration-300"
          onClick={(e) => {
            const buttons = document.querySelectorAll("button");
            buttons.forEach((button) => button.classList.remove("active"));
            e.target.classList.add("active");
          }}
        >
          21 May
        </button>
        <button
          className="inline-flex items-center rounded-md bg-black px-10 py-3 text-xs font-medium text-white shadow-md hover:bg-gray-900 transition duration-300"
          onClick={(e) => {
            const buttons = document.querySelectorAll("button");
            buttons.forEach((button) => button.classList.remove("active"));
            e.target.classList.add("active");
          }}
        >
          22 May
        </button>
        <button
          className="inline-flex items-center rounded-md bg-black px-10 py-3 text-xs font-medium text-white shadow-md hover:bg-gray-900 transition duration-300"
          onClick={(e) => {
            const buttons = document.querySelectorAll("button");
            buttons.forEach((button) => button.classList.remove("active"));
            e.target.classList.add("active");
          }}
        >
          23 May
        </button>
        <button
          className="inline-flex items-center rounded-md bg-black px-10 py-3 text-xs font-medium text-white shadow-md hover:bg-gray-900 transition duration-300"
          onClick={(e) => {
            const buttons = document.querySelectorAll("button");
            buttons.forEach((button) => button.classList.remove("active"));
            e.target.classList.add("active");
          }}
        >
          24 May
        </button>
        <button
          className="inline-flex items-center rounded-md bg-black px-10 py-3 text-xs font-medium text-white shadow-md hover:bg-gray-900 transition duration-300"
          onClick={(e) => {
            const buttons = document.querySelectorAll("button");
            buttons.forEach((button) => button.classList.remove("active"));
            e.target.classList.add("active");
          }}
        >
          25 May
        </button>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          class="mb-4 bg-green-500 hover:bg-green-700 active:bg-green-900 text-lg text-white font-bold py-2 px-4 rounded-md shadow-md hover:shadow-lg active:shadow-none transition duration-300 ease-in-out"
          onClick={() => {
            alert("Your slot has been booked!.");
          }}
        >
          Book now
        </button>
      </div>
    </>
  );
};

export default TeamPersonal;
