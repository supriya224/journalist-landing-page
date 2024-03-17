/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable array-callback-return */
// import Details from '../../components/core/details';
import Details from '../../components/core/Details';
import CourseDetails from '../../components/domains/CourseDetails';
import Course from '../../components/domains/course';
import MainLayout from '../../layouts/MainLayout';
import Contact from '../Contact';

function Home() {
  return (
    <MainLayout>
      <div>
        <div className="w-screen h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30">
          <img
            src="https://todaydigital.com/wp-content/uploads/2023/12/What-Is-Journalism-And-Why-Does-It-Matter-In-Todays-World_.jpg"
            className="absolute top-0 left-0 min-h-full ob"
            alt=""
          />
          <div className="relative z-20 max-w-screen-lg mx-auto grid grid-cols-12 h-full items-center">
            <div className="col-span-6">
              <h1 className="text-white font-extrabold text-5xl mb-8">
                Hey, connections <span>👋</span>
              </h1>
              <span className="uppercase text-white text-2xl font-bold mb-2 block">
                My name is <span className="text-orange-400 ">Arun</span>, and
                was <span className="text-orange-400 "> journalist</span>
              </span>
              <p className="text-stone-100 text-xl">
                <span className="text-orange-400 font-bold "> Journalists</span>{' '}
                are the major sources of accurate up-to-date information on the
                issues of the time.
              </p>
              <p className="text-white font-bold text-xl">
                As truth becomes the number one goal of news in today's world,
                people of the current generation go searching for the truth in
                the news. The print and electronic media, in this way, is the
                measuring factor for rights and wrongs of the society. And here
                I would like to stress that those who show others a way from the
                truth are no less a threat to others. Consequently, ones should
                act cautiously seeking the only trusted information, not the
                fake news. I provide a traffic of how to master the skills of
                the truth telling journalist; s/he is to be able to distinguish
                between fact and fiction.
              </p>
              <button
                type="button"
                className="mt-8 text-white uppercase py-4 text-base font-light px-10 border border-white hover:bg-orange-100 hover:bg-opacity-50"
              >
                About me
              </button>
            </div>
          </div>
        </div>
        <Details />
        {/* new page start */}
        <div className="bg-[#f7d0b6] py-20">
          <div className="max-w-screen-lg mx-auto flex justify-between items-center">
            <div className="max-w-xl text-center justify-items-center">
              <span className="text-black font-bold">
                "Basing my experience and journey, I want to motivate upcoming
                journalists to grow in their advocacies and let them tap their
                potentials. In this way, we shall journey to the destination
                where discoveries and success is guaranteed.
              </span>
              <p className="text-base text-sky-950">
                A journalist who is responsible and conscientious in their work
                📰 not only hands out information by putting it a format which
                will be acceptable by the public. Journalists being careful to
                maintain at all times this responsibility to defend facts and
                impartiality, wield a weapon-power that can form the narrative
                of their country and dictate its future and progress. In India,
                like in any other place in the world, journalists have the power
                to provide the positivity we crave or let us get the feeling of
                negativity. It all depends on what road a future media
                professional wants to follow. Choose and stick to it,
                understanding that your way will become a subject of every
                student forever.
              </p>
            </div>
            <button
              type="button"
              className="text-sky-950 uppercase py-3 text-base px-10 border border-sky-950 hover:bg-orange-500 hover:bg-opacity-10"
            >
              Get started
            </button>
          </div>
        </div>
        {/* another flex items start */}

        <div className="py-12 relative overflow-hidden leading-3 bg-white">
          <h3 className="container text-white mx-auto bg-sky-950  py-5 text-center my-9">
            Those were required of both female and male students who had
            journalist profession as their first career choice..
            <span className="bg-[#f7d0b6] font-bold text-black px-9 py-7">
              Classification or finding the perfect employee should not be based
              on gender and instead be Someone's skills.
            </span>
          </h3>
          <div className="grid grid-cols-2 max-w-screen-lg mx-auto">
            <div className="w-full flex flex-col items-end pr-16">
              <h2 className="text-[#64618C] font-bold text-2xl  text-right mb-12 mt-10">
                Hey Students
              </h2>
              <div className="h-full mt-auto overflow-hidden relative">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDYUOywd-FSiz2jtGWhMiuV3r-eieWek-S3w&usqp=CAU"
                  className="h-[50vh] w-full object-contain"
                  alt=""
                />
              </div>
            </div>

            <div className="py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-sky-950 before:top-0 before:left-0">
              <div className="relative z-20 pl-12">
                <h2 className="text-[#f7d0b6] font-black text-5xl leading-snug mb-10">
                  Some major skills required to become a good journalists
                </h2>
                <p className="text-white text-base">
                  <h3 className="my-3">
                    Communication skills: a favorite author is capable of
                    interviewing subjects, delivering decisions and engaging
                    with the readers.
                  </h3>
                  <h3 className="my-3">
                    Technological Proficiency: the essential knowledge of the
                    digital implements and platforms put to use in today
                    reporting.
                  </h3>
                  <h3 className="my-3">
                    Networking Abilities: the talent to create relationships
                    with friends, others in the area, and the culture.
                  </h3>
                </p>
                <button
                  type="button"
                  className="mt-8 text-white uppercase py-3 text-sm px-10 border border-white hover:bg-white hover:bg-opacity-10"
                >
                  Talk with expert
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="py-4 relative overflow-hidden bg-white">
          <div className="grid grid-cols-2 mx-auto">
            <div className="py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-[#f7d0b6] before:top-0 before:right-0">
              <div className="relative">
                <h2 className="text-sky-950  mx-32 font-black text-5xl leading-snug mb-10">
                  Finpoint is here <br />
                  to help you
                </h2>
                <p className="text-sky-950 mx-32 text-base">
                  <h3 className="my-3">
                    Writing Skills: the need to have necessary skill of writing
                    to communicate effectively, and more critical, concisely,
                    through writing is a prerequisite for the field
                  </h3>
                  <h3 className="my-3">
                    Adaptability: the vacancy to work various environments and
                    study a variety of areas.
                  </h3>
                  <h3 className="my-3">
                    Time Management: the required skill to meet deadlines and
                    feature multiple projects quickly.
                  </h3>
                </p>
                <button
                  type="button"
                  className="mt-8  mx-32 text-sky-950 uppercase py-3 text-sm px-10 border border-sky-950 hover:bg-white hover:bg-opacity-10"
                >
                  Talk with expert
                </button>
              </div>
            </div>
            <div className="w-full flex flex-col pl-16">
              <h2 className="text-[#64618C] font-bold text-2xl max-w-xs text-left mb-12 mt-10">
                Whether you need Assistance
              </h2>
              <div className="h-[50vh] mt-auto overflow-hidden relative">
                <img
                  src="https://thumbs.dreamstime.com/b/detective-cartoon-illustration-11853829.jpg"
                  className="h-full w-full object-contain"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="py-12 relative overflow-hidden bg-white">
          <div className="grid grid-cols-2 max-w-screen-lg mx-auto">
            <div className="w-full flex flex-col items-end pr-16">
              <h2 className="text-[#64618C] font-bold text-2xl max-w-xs text-right mb-12 mt-10">
                Whether you need Assistance
              </h2>
              <div className="h-full mt-auto overflow-hidden relative">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfMXGddBRhGFKaXg4fKHrijIveQ6OwaHr-S6gCHsohiJB3oG_2vZK8UmU7I0VRNZebRxw&usqp=CAU"
                  className="h-full w-full object-contain"
                  alt=""
                />
              </div>
            </div>

            <div className="py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-sky-950 before:top-0 before:left-0">
              <div className="relative z-20 pl-12">
                <h2 className="text-[#f7d0b6] font-black text-5xl leading-snug mb-10">
                  Finpoint is here <br />
                  to help you
                </h2>
                <p className="text-white text-base">
                  To go through your career journey to a successful journalism
                  carefully think about taking your skills and knowledge a step
                  a forward through the “Modern Journalism” online course and
                  certificate program provided by Yellowbrick. This extensive
                  program will give you new insights and help you hone the
                  practical skills needed to excel as the field of journalism
                  keeps on evolving. Make the next step clear and sign up for
                  the “Modern Journalism” course
                </p>
                <button
                  type="button"
                  className="mt-8 text-white uppercase py-3 text-sm px-10 border border-white hover:bg-white hover:bg-opacity-10"
                >
                  Talk with expert
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CourseDetails />
      <Course />
      <Contact />
    </MainLayout>
  );
}

export default Home;
