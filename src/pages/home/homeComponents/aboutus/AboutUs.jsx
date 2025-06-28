import { BsFillBarChartFill } from 'react-icons/bs';
import { BiAtom } from 'react-icons/bi';
import { BsFillBriefcaseFill } from 'react-icons/bs';

import contact from '../../../../assets/pets.jpg';
import aboutus from '../../../../assets/aboutus.jpg'; 

const AboutUs = () => {
  return (
    <div className="relative mt-20 " style={{ backgroundImage: `url(${contact})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
      <div className="absolute inset-0 bg-black opacity-70" />

      <div className="relative z-10 text-white py-16">
        <div className="flex flex-col items-center justify-center mt-20 mb-20" id="services">
          <h2 className="text-[white] text-3xl" >Know about us</h2>
          <h1 className="text-white text-4xl md:text-4xl font-metamorphous font-bold text-center">__About Us__</h1>
        </div>
        <div className='flex items-center justify-center '>
        <div className="px-10 py-10 w-full lg:max-w-[1200px] mx-auto">
          <div className="flex gap-16 items-center justify-center">
            <div>
              <BsFillBarChartFill className="text-3xl text-warning" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Our Vision</h1>
              <p>To create a safe haven where pet parents never have to navigate the ups and downs of animal companionship alone. We're here to share the knowledge, support, and genuine care that every pet and their human deserves – because we believe the bond between people and their animals makes the world a little brighter, one tail wag and purr at a time.</p>
            </div>
          </div>
          {/*  */}
          <div className="flex gap-16 items-center justify-center my-10">
            <div>
              <BiAtom className="text-3xl  text-success" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Our Mission</h1>
              <p>A world where every pet owner feels confident, supported, and celebrated in their journey of loving an animal. Where the 2 AM worries have answers, where the small victories are cheered, and where the deep, irreplaceable bond between humans and their pets is honored and protected.</p>
            </div>
          </div>
          {/*  */}
          <div className="flex gap-16 items-center justify-center">
            <div>
              <BsFillBriefcaseFill className="text-3xl  text-red-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Our Core Values</h1>
              <p>No sugar-coating, no condescension, just honest guidance from people who've been there. We share what actually works, not what sounds good in theory.
                Whether you have a pampered poodle or a three-legged rescue mutt, your love for them is valid and your concerns are important. All animals deserve exceptional care.
                
              </p>
            </div>
          </div>
        </div>
            <div>
            <img src={aboutus} alt="" className=' w-9/12 rounded-lg hidden lg:flex' />
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
