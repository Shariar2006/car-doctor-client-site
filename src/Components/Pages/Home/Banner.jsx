import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">

                <div id="slide1" className="carousel-item relative w-full h-[90vh]">
                    <img src={img1} className="w-full" />

                    <div className="absolute h-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]  left-0 right-0  ">
                        <div className='w-1/3 space-y-5 ml-7 text-white'>
                            <h1 className='text-6xl font-bold text-white '>Affordable Price For Car Servicing</h1>
                            <p className=''>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-4'>
                                <button className="btn btn-active text-white bg-[#FF3811] border-none">Secondary</button>
                                <button className="btn btn-outline btn-secondary">Secondary</button>

                            </div></div>
                    </div>

                    <div className="absolute flex justify-end gap-3 bottom-0 transform  -translate-y-1/2 left-5 right-5 ">
                        <a href="#slide6" className="btn btn-circle hover:bg-[#FF3811] hover:text-white">❮</a>
                        <a href="#slide2" className="btn btn-circle hover:bg-[#FF3811] hover:text-white">❯</a>
                    </div>
                </div>


                <div id="slide2" className="carousel-item relative w-full h-[90vh]">
                    <img src={img2} className="w-full" />
                    <div className="absolute flex justify-end gap-3 bottom-0 transform  -translate-y-1/2 left-5 right-5 ">
                        <a href="#slide1" className="btn btn-circle hover:bg-[#FF3811] hover:text-white">❮</a>
                        <a href="#slide3" className="btn btn-circle hover:bg-[#FF3811] hover:text-white">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[90vh]">
                    <img src={img3} className="w-full" />
                    <div className="absolute flex justify-end gap-3 bottom-0 transform  -translate-y-1/2 left-5 right-5 ">
                        <a href="#slide2" className="btn btn-circle hover:bg-[#FF3811] hover:text-white">❮</a>
                        <a href="#slide4" className="btn btn-circle hover:bg-[#FF3811] hover:text-white">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-[90vh]">
                    <img src={img4} className="w-full" />
                    <div className="absolute flex justify-end gap-3 bottom-0 transform  -translate-y-1/2 left-5 right-5 ">
                        <a href="#slide3" className="btn btn-circle hover:bg-[#FF3811] hover:text-white">❮</a>
                        <a href="#slide5" className="btn btn-circle hover:bg-[#FF3811] hover:text-white">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full h-[90vh]">
                    <img src={img5} className="w-full" />
                    <div className="absolute flex justify-end gap-3 bottom-0 transform  -translate-y-1/2 left-5 right-5 ">
                        <a href="#slide4" className="btn btn-circle hover:bg-[#FF3811] hover:text-white">❮</a>
                        <a href="#slide6" className="btn btn-circle hover:bg-[#FF3811] hover:text-white">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full h-[90vh]">
                    <img src={img6} className="w-full" />
                    <div className="absolute flex justify-end gap-3 bottom-0 transform  -translate-y-1/2 left-5 right-5 ">
                        <a href="#slide5" className="btn btn-circle hover:bg-[#FF3811] hover:text-white">❮</a>
                        <a href="#slide1" className="btn btn-circle hover:bg-[#FF3811] hover:text-white">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;