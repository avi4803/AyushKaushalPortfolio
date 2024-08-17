import Testimonial from "../Testimonial.jsx";
import Property1SimpleForm from "../Property1SimpleForm.jsx";
import TypeCenteredFooterWithSoci from "../TypeCenteredFooterWithSoci.jsx";


import React, { useEffect } from 'react';


const VideoEditorsPortfolioHom = () => {


// VIDEO PLAY OPTIMIZATION

  useEffect(() => {
    const videos = document.querySelectorAll('video');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting && entry.intersectionRatio >= 0.7) {
          video.play();
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.7 });

    videos.forEach(video => {
      observer.observe(video);
    });
  }, []);

  // VIDEO PLAY OPTIMIZATION END


  return (
    <>
    
    
      
      <div className="self-stretch flex flex-row items-start justify-start pt-0 box-border top-[0] z-[99] sticky max-w-full">
        <header className="h-16  flex-1 bg-gray-100 overflow-hidden flex flex-row items-center justify-between pt-1.5  box-border relative max-w-full text-left text-md text-whitesmoke-200 font-open-sans">
          <div className=" "> <img src="Logo.png" className="size-[54px] p-4 rounded-full" alt="" /></div>
          <div className="md:flex flex-row gap-6 items-end box-border max-w-full m-8 hidden">
            <div className="hover:text-sky-400 ">Home</div>
            <div className="hover:text-sky-400 ">Samples</div>
            <div className="hover:text-sky-400 " >Pricing</div>
            <div className="hover:text-sky-400 " >Contact Us</div>
            </div>
        </header>
      </div>
      
      <main className="full flex flex-col items-start justify-center pt-0 px-0 pb-[151px] box-border max-w-full lg:pb-16 lg:box-border mq750:pb-[27px] mq750:box-border mq1050:pb-[42px] mq1050:box-border">
        <section className="self-stretch flex flex-row items-start justify-start py-0 px-[43px] box-border max-w-full mq750:pl-[21px] mq750:pr-[21px] mq750:box-border">
          <img
            className="lg:h-screen flex-1 my-6 relative rounded-11xl max-w-full  sm:object-cover overflow-hidden"
            loading="lazy"
            alt=""
            src="/maxresdefault-1@2x.png"
          />
        </section>
        <section className="self-stretch flex flex-col item
        s-start justify-start pt-0 px-0 pb-20 box-border max-w-full text-left text-37xl text-gray-100 font-inter lg:pb-[34px] lg:box-border mq750:pb-[22px] mq750:box-border">
        
        <div className="self-stretch   bg-gray-400 w-screen flex flex-col  p-12 pb-[65px] box-border gap-[67px] max-w-full lg:pt-[127px] lg:pb-[42px] lg:box-border ">
         <div className=" outline outline-2 md:p-5 rounded-xl self-center flex flex-row items-start justify-center box-border max-w-full text-center md:text-53xl sm:text-37xl text-white font-bold font-[inherit]">
          Talking Heads
          </div>
    
            <div className="self-stretch flex flex-row items-start justify-center py-0 pl-0 pr-px box-border max-w-full">
              <div className="w-[957px] rounded-16xl bg-gray-100 flex flex-row flex-wrap items-start justify-center py-[47px] px-[25px] box-border gap-6 max-w-full ">
                <div className="h-[565px] flex-1 z-10 relative rounded-11xl hidden sm:flex bg-whitesmoke-100 overflow-hidden  min-w-[240px] max-w-[300px]" ></div>
                <div className="h-[565px] flex-1 z-10 relative rounded-11xl bg-whitesmoke-100  overflow-hidden min-w-[240px] max-w-[300px]" >
                  {/* video section-R1 */}
                  <video id="myVideo" className="h-full" controls loop  >
      <source src="/TH-1.mp4" />
    </video>
    {/* video section-R1 end*/}    


                   </div>
              </div>
            </div>

            <div className="self-stretch flex flex-row items-start justify-center py-0 pl-0 pr-px box-border max-w-full">
              <div className="w-[957px] rounded-16xl bg-gray-100 flex flex-row flex-wrap items-start justify-center py-[47px] px-[25px] box-border gap-6 max-w-full ">
                <div className="h-[565px] flex-1  rounded-11xl hidden sm:flex bg-whitesmoke-100 overflow-hidden  min-w-[240px] max-w-[300px]" />
                <div className="h-[565px] flex-1 rounded-11xl bg-whitesmoke-100  overflow-hidden min-w-[240px] max-w-[300px]" >
                   {/* video section-R2 */}
                   <video id="myVideo" className="h-full" controls loop >
      <source src="/TH-2.mp4" />
    </video>
    {/* video section-R2 end*/}   
                </div>
              </div>
            </div>

            <div className="self-stretch flex flex-row items-start justify-center py-0 pl-0 pr-px box-border max-w-full">
              <div className="w-[957px] rounded-16xl bg-gray-100 flex flex-row flex-wrap items-start justify-center py-[47px] px-[25px] box-border gap-6 max-w-full ">
                <div className="h-[565px] flex-1  rounded-11xl hidden sm:flex bg-whitesmoke-100 overflow-hidden  min-w-[240px] max-w-[300px]" />
                <div className="h-[565px] flex-1 rounded-11xl bg-whitesmoke-100  overflow-hidden min-w-[240px] max-w-[300px]" >
                   {/* video section-R3 */}
                   <video id="myVideo" className="h-full" controls  loop >
      <source src="/TH-3.mp4" />
    </video>
    {/* video section-R3 end*/}   
                </div>
              </div>
            </div>





          </div>
          <div className=" self-stretch flex flex-row items-center justify-center py-0 pl-3 pr-0 box-border max-w-full  text-center text-gray-200">
            <div className="w-full bg-white flex flex-col items-center justify-center md:m-10 box-border gap-10 max-w-[101%] shrink-0 mq750:gap-5 mq750:pt-[72px] mq750:pb-[78px] mq750:box-border">
              <h1 className=" self-stretch text-inherit leading-[120%] font-bold font-[inherit] ">
                Customer Feedback
              </h1>
              <div className="w-full flex flex-row flex-wrap items-start justify-center  box-border gap-x-10 gap-y-[38px] max-w-[1248px] lg:pl-[22px] lg:pr-[22px] lg:box-border lg:max-w-full ">
                <Testimonial
                  imageLummiCategoryavatars="/image-lummi-categoryavatars@2x.png"
                  name1="Jane Doe, CEO"
                  shortTestimonial="“This service transformed our videos!”"
                />
                <Testimonial
                  imageLummiCategoryavatars="/image-lummi-categoryavatars-1@2x.png"
                  name1="John Smith, Director"
                  shortTestimonial="“Exceptional quality and creativity!”"
                />
                <Testimonial
                  imageLummiCategoryavatars="/image-lummi-categoryavatars-2@2x.png"
                  name1="Emily Clark, Producer"
                  shortTestimonial="“Highly recommend their expertise!”"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-[1255px]  self-center flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-37xl text-whitesmoke-200 font-fugaz-one">
          <div className="w-[1013px] font-fugaz-one rounded-11xl bg-gray-100 flex flex-row items-start justify-start pt-[73.5px] px-4 pb-[59.5px] box-border relative gap-10 max-w-full mq750:gap-5 mq450:pt-12 mq450:pb-[39px] mq450:box-border">
            <div className="flex-1 bg-gray-100 flex flex-col items-start justify-center py-0 px-8 box-border max-w-full mq750:gap-5 mq1050:gap-10">
              <div className="self-stretch bg-gray-100 flex flex-col items-center justify-start py-0 px-5 box-border max-w-full">
                <div className="w-[720px] flex flex-col items-center justify-center gap-[21px] max-w-full">
                  <h1 className="m-0  self-stretch relative text-inherit leading-[120%] font-normal font-[inherit] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] mq1050:text-26xl mq1050:leading-[54px] mq450:text-15xl mq450:leading-[40px]">
                    Pricing
                  </h1>
                  <h3 className="m-0 self-stretch relative text-3xl leading-[31px] font-normal font-open-sans text-white mq450:text-lg mq450:leading-[25px]">
                    Choose the perfect plan for your project.
                  </h3>
                  <h1 className="m-0 self-stretch relative text-[36px] leading-[47px] font-normal font-[inherit] text-lightseagreen mq1050:text-[29px] mq1050:leading-[37px] mq450:text-3xl mq450:leading-[28px]">
                    Starting from
                  </h1>
                  <div className="flex flex-row items-start justify-end text-[108px]">
                    <div className="w-[210px] relative tracking-[-0.01em] leading-[119px] inline-block mq1050:text-[54px] mq1050:leading-[71px] mq450:text-[32px] mq450:leading-[48px]">
                      500 
                    </div>
                  <div className="text-3xl">INR</div>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Property1SimpleForm />
      <TypeCenteredFooterWithSoci />
    
    </>
  );
};

export default VideoEditorsPortfolioHom;
