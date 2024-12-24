export default function CallToAction() {
    return (
        <section className="mt-8">
            <div className="lg:flex justify-between pb-8">
                <div className="basis-[50%]">
                    <h3 className="font-serif text-2xl lg:text-5xl">
                        Gain access to premium content and stay up to date with the latest insights
                    </h3>
                </div>
                <div className="basis-[33.333%] flex flex-col justify-end space-y-8 mt-4 lg:mt-0 lg:min-h-[24rem]">
                    <p className="pr-16">
                        .zedw is a media and data insights company that provides market anaylsis of the Southern
                        African Markets.
                    </p>
                    <div className="text-right">
                        <a href="#"
                           className="rounded-full border border-[#072009] px-4 py-1 hover:bg-[#072009] hover:text-[#E9C46A]">
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
