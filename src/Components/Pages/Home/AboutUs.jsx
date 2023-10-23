/* eslint-disable react/no-unescaped-entities */
import Parts from '../../../assets/images/about_us/parts.jpg';
import Person from '../../../assets/images/about_us/person.jpg';

const AboutUs = () => {
    return (
        <div>
            <div className="hero h-screen bg-white">
                <div className="hero-content flex-col lg:flex-row p-5">
                    <div className='lg:w-1/2 relative'>
                        <img src={Person} className="w-[500px] rounded-lg shadow-2xl h-96" />
                        <img src={Parts} className="w-1/2 absolute rounded-lg border-8 border-white shadow-2xl right-5 top-3/4" />
                    </div>
                    <div className='mt-5 lg:w-1/2 p-16'>
                        <h3 className='text-[#FF3811] font-bold text-xl'>About us</h3>
                        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <div className='text-gray-500'>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                        </div>
                        <button className="btn bg-[#FF3811] hover:bg-[#FF3811] text-white mt-5">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;