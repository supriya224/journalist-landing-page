import React from 'react';

function CourseDetails() {
  return (
    <div>
      {/* bg-white border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 shadow-2xl transition duration-300 hover:scale-105 */}
      <div className="flex min-h-screen items-center justify-center p-10 bg-white">
        <div className="container grid max-w-screen-xl gap-8 lg:grid-cols-2 lg:grid-rows-2">
          <div className="row-span-3 flex flex-col bg-[#f7d0b6] rounded-md border border-slate-200 shadow-2xl transition duration-300 hover:scale-105">
            <div className="h-1/2 flex-1">
              <img
                src="https://shooliniuniversity.com/blog/wp-content/uploads/2021/10/Benefits-of-studying-Journalism-and-Mass-Communication-scaled.jpg"
                className=" w-[100%] dark:bg-sky-950"
                alt=""
              />
            </div>
            <div className="p-10">
              <h3 className="text-xl font-medium text-gray-700">
                India Goal of 2030
              </h3>
              <p className="mt-2 text-slate-500">
                <h4>
                  Goal 1. Eradicate poverty in all forms including maternal
                  death, human immunodeficiency virus or acquired
                  immunodeficiency syndrome (HIV/AIDS), malaria, tuberculosis,
                  and neglected tropical diseases.
                </h4>
                <h4>
                  Goal 2. It floats the idea of tackling hunger, improving the
                  food security and responsible agriculture.
                </h4>
                <h4>
                  Goal 3. The SDG #3states the primary aim of humanity as
                  healthy lives and good wellbeing for everyone irrespective of
                  the age bracket.
                </h4>
                <h4>
                  Goal 4. Assure the enactment of standard and equal educational
                  services for everyone and enhance the possibilities of
                  lifelong learning for everyone.
                </h4>
                <h4>
                  Goal 5. Accomplish gender equality and realize the rights of
                  women without any discrimination and girls' empowerment.
                </h4>
                <h4>
                  Goal 6. Guarantee the provision of water and sanitation for
                  all and sustainable usage thereof.
                </h4>
                <h4>
                  Goal 7. Ensure the availability of clean, continuous,
                  renewable and advanced energy sources, every single person on
                  the globe.
                </h4>
                <h4>
                  Goal 8 Give the macroeconomic perspectives towards the
                  long-term and short-term influence which works for the benefit
                  of everyone, forming a good quality of work environment.
                </h4>
                <h4>
                  Goal 9. Raise durable infrastructures, conceive pro poor and
                  sustainable industrializationa and create innovations.
                </h4>
                <h5>
                  Goal 10. To decrease inequality within countries as well as
                  among those countries.
                </h5>
              </p>
              <a
                href="/"
                className="mt-2 inline-flex text-white py-2 px-5 bg-sky-950"
              >
                Read More →
              </a>
            </div>
          </div>
          <div className="flex rounded-md border dark:bg-sky-950 border-slate-200 shadow-2xl transition duration-300 hover:scale-105">
            <div className="flex-1 p-10">
              <h3 className="text-xl font-medium text-gray-200">
                Admission Open
              </h3>
              <p className="mt-2 text-slate-500">
                Joining our journalists course? No matter which procedure suits
                you best, with ESP and I suggest you to stay tuned for the
                upcoming episodes?
              </p>
              <a href="/" className="mt-2 inline-flex text-orange-200">
                Read More →
              </a>
            </div>

            <div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
              <div className="absolute inset-0">
                <img
                  src="https://srigrmhss.com/img/admission.jpg"
                  className="h-full w-full object-cover object-left-top"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="flex rounded-md border dark:bg-sky-950 border-slate-200 shadow-2xl transition duration-300 hover:scale-105">
            <div className="flex-1 p-10">
              <h3 className="text-xl font-medium text-gray-200">
                Course and fees
              </h3>
              <p className="mt-2 text-slate-500">
                On completion of the trial, I want the students to enroll for my
                module taking into the consideration my real life experience, I
                can be able to expound on the topic in simple terms. If you
                recommend the course and find it irrelevant for you, your fees
                will be refundable.
              </p>
              <a href="/" className="mt-2 inline-flex text-orange-200">
                Read More →
              </a>
            </div>

            <div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
              <div className="absolute inset-0">
                <img
                  src="https://www.financialexpress.com/wp-content/uploads/2023/11/image_-34.jpg"
                  className="h-full w-full object-cover "
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="flex rounded-md border dark:bg-sky-950 border-slate-200 shadow-2xl transition duration-300 hover:scale-105">
            <div className="flex-1 p-10">
              <h3 className="text-xl font-medium text-gray-200">
                Scholership available
              </h3>
              <p className="mt-2 text-slate-500">
                These are the available flaring procedures after your
                performance and your scholership is ready for payment. Hence,
                you can afford your tuition because of this.
              </p>
              <a href="/" className="mt-2 inline-flex text-orange-200">
                Read More →
              </a>
            </div>

            <div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
              <div className="absolute inset-0">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgFO92DfpBF1FR9IngvWLkS7vojSyqI7ASPmNd7-WPn7pmR5bvHBMC1ZtjYnNEGDfjGI0&usqp=CAU"
                  className="h-full w-fit object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex rounded-md dark:bg-sky-950 border border-slate-200 shadow-2xl transition duration-300 hover:scale-105">
            <div className="flex-1 p-10">
              <h3 className="text-xl font-medium text-gray-700">
                Respond faster, with automated chatbots
              </h3>
              <p className="mt-2 text-slate-500">
                Integrate with chatbots using Rasa or Dialogflow to automate
                conversations. Qualify using chatbots and seamlessly handoff to
                human agents.
              </p>
              <a href="/" className="mt-2 inline-flex text-sky-500">
                Read More →
              </a>
            </div>

            <div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
              <div className="absolute inset-0">
                <img
                  src="https://bcdn.mindler.com/bloglive/wp-content/uploads/2022/09/01152855/6-Career-opportunities-After-Journalism_blog.png"
                  className="h-full w-full object-cover "
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="row-span-2 flex flex-col bg-[#f7d0b6] rounded-md border border-slate-200 shadow-2xl transition duration-300 hover:scale-105">
            <div className="h-1/2 flex-1">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrry-SGqOTbfU14oMJluUQeuSwbEgyiTQ56Q&usqp=CAU"
                className="w-full object-cover object-right-top dark:bg-sky-950"
                alt="omnichannel"
              />
            </div>
            <div className="p-3">
              <h3 className="text-xl font-medium text-gray-700">
                Top trending news of INDIA
              </h3>
              <ol>
                <li>The election that will be come in 2024</li>
                <li>
                  Inturn, the Election Commission publishes all such information
                  received by SBI as bonds data
                </li>

                <li>In February 2024 Paytm ban was placed</li>
                <li>
                  The hunger strike by the people of Ladakh demands zero
                  tolerance for the violence by the soldiers of the Indian army.
                </li>

                <li>Bangalore Water crises</li>
                <li>Bangalore Bomb blast</li>
                <li>
                  uttar pradesh has second largest economic value of india. the
                  exact position in first economic zone is taken by maharashtra
                </li>

                <li>
                  India strongly rebuffs U.S. criticism of CAA, calls it
                  misinformed
                </li>

                <li>IPL 2024 will start on March 22.</li>
                <li>stock market decline</li>
              </ol>
            </div>
          </div>
          <div className="flex rounded-md border dark:bg-sky-950 border-slate-200 shadow-2xl transition duration-300 hover:scale-105">
            <div className="flex-1 p-10">
              <h3 className="text-xl font-medium text-gray-200">
                Get Job and placed
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                <h3>
                  Knowing that your resume and your cover letter will serve as
                  the first impression that the employer thinks of you, be sure
                  to highlight the relevant experiences, skills, and
                  achievements.
                </h3>
                <h3>
                  Maintain a professional web site and social media appearances
                  as part of a strong online presence. Get connected to
                  professionals of your industry by going to events, joining
                  different social networks and communicating with alumni
                  members.
                </h3>
                <h3>
                  Attain more practical experience by writing as a freelancer or
                  work for the campus publications. Essay Snippet: It is not
                  just about reading the stories of those who have fled or
                  experienced persecution; it is about engaging with the
                  individuals who write these accounts.
                </h3>
                <h3>
                  After all, the real purpose of refugee literature is to foster
                  empathy and understanding among readers so they can contribute
                  to creating a more empathetic society where refugees Hunt down
                  for early internships and practice for the interviews to clear
                  the expectations of the organization in advance.
                </h3>
                <h3>
                  The last step is to send follow-up mail or letter after the
                  interviews to indicate appreciation as well as reaffirm the
                  interest
                </h3>
              </p>
              <a href="/" className="mt-2 inline-flex text-orange-200">
                Read More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
