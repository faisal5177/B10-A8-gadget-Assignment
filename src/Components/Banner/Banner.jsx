import bannerImg from '../../assets/banner.jpg';

const Banner = () => {
    return (
       <div className='px-10 mb-[300px]'>
         <div className="hero bg-[#9538E2] border rounded-xl min-h-screen mx-auto relative">
            <div className="hero-content text-center text-white -mt-[150px]">
                <div>
                    <h1 className="text-4xl font-bold">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                    <p className="py-6">
                        <small>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</small>
                    </p>
                    <button className="btn text-[#9538E2] font-bold">Shop Now</button>
                </div>
            </div>
            <img className='w-2/3 h-2/3 sm:mt-20 absolute border p-4 rounded-xl right-50 top-1/2 mt-[50px]' src={bannerImg} alt="Banner" />
        </div>
       </div>
    );
};

export default Banner;
