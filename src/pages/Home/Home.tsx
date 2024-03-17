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
                are crucial for keeping the public informed and updated on
                current events.
              </p>
              <p className="text-white font-bold text-2xl">
                In today's generation, everyone seeks truth in news. Through
                newspapers and media, people determine right from wrong. But if
                someone ignores reality and leads others astray, clarity is
                lost. Hence, it's crucial to focus on reliable news, avoiding
                falsehoods. I offer a roadmap to become a truthful journalist,
                adept at separating fact from fiction.
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
                "Drawing from my own journey and experiences, I aim to guide
                aspiring journalists in honing their skills and uncovering their
                potential. Together, let's embark on a path of self-discovery
                and journalistic excellence."👍🏾
              </span>
              <p className="text-base text-sky-950">
                A conscientious journalist 📰 not only delivers news but also
                determines the manner in which it is presented to the public.
                Embracing the responsibility to uphold truth and integrity, a
                journalist holds the power to shape the narrative and propel the
                nation forward. In India, as elsewhere, the choice between
                contributing positively or negatively to society lies in the
                hands of every aspiring journalist. Choose wisely, for your path
                will influence the trajectory of our nation.
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
            These criteria apply to both female and male students aspiring to
            become journalists.{' '}
            <span className="bg-[#f7d0b6] font-bold text-black px-9 py-7">
              Gender should not be a determining factor in evaluating one's
              suitability for the profession.
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
                  <h3>
                    Communication Skills: Capability to interview subjects,
                    present findings, and engage with audiences.
                  </h3>
                  <h3>
                    Networking Abilities: Capacity to build relationships with
                    sources, colleagues, and the community.
                  </h3>
                  <h3>
                    Curiosity and Critical Thinking: A natural inclination to
                    question, analyze, and investigate.
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
          <div className="grid grid-cols-2 max-w-screen-lg mx-auto">
            <div className="py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-[#f7d0b6] before:top-0 before:right-0">
              <div className="relative z-20 pl-12">
                <h2 className="text-sky-950 font-black text-5xl leading-snug mb-10">
                  Finpoint is here <br />
                  to help you
                </h2>
                <p className="text-white text-base">
                  <h3>
                    Strong Writing Skills: Ability to communicate effectively
                    and concisely through writing is crucial.
                  </h3>
                  <h3>
                    Adaptability: Willingness to work in diverse environments
                    and cover a wide range of topics.
                  </h3>
                  <h3>
                    Time Management: Ability to meet deadlines and manage
                    multiple tasks efficiently.
                  </h3>
                </p>
                <button
                  type="button"
                  className="mt-8 text-sky-950 uppercase py-3 text-sm px-10 border border-sky-950 hover:bg-white hover:bg-opacity-10"
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
                <p className="text-white text-sm">
                  <h3>
                    Technological Proficiency: Familiarity with digital tools
                    and platforms used in modern journalism.
                  </h3>
                  <h3>
                    Ethical Standards: Commitment to truth, accuracy, fairness,
                    and impartiality in reporting.
                  </h3>
                  <h3>
                    Research Skills: Proficiency in gathering information from
                    various sources and verifying its accuracy.
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
      </div>
      <CourseDetails />
      <Course />
      <Contact />
    </MainLayout>
  );
}

export default Home;
