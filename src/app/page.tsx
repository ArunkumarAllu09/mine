import Image from "next/image";

export default function Home() {
  return (

    <div>
      <header className="bg-[#97144d] fixed h-20 flex items-center top-0 inset-x-0">
        <nav>
          <ul>
            <li className="inline m-5"><a className="no-underline text-[white]" href="#">Home</a></li>
            <li className="inline m-5"><a className="no-underline text-[white]" href="#">About</a></li>
            <li className="inline m-5"><a className="no-underline text-[white]" href="#">Pricing</a></li>
            <li className="inline m-5"><a className="no-underline text-[white]" href="#">Terms of use</a></li>
            <li className="inline m-5"><a className="no-underline text-[white]" href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <div className="mt-[100px]">
        <section className="mb-8">
          <h1 className="text-4xl font-bold text-[#121212] mb-8">Axis MF's Business Philosophy</h1>
          <p className="text-xl font-medium text-[#555555] leading-8">
            Our product, sales and service strategy is entirely guided by this. We aim to provide quality financial and investment solutions which help customers feel financially secure and feel confident of a brighter and prosperous future. We lay a strong emphasis on risk management and planning. We encourage our investors and our partners to take a holistic view which extends beyond mere investing surpluses to investing with an underlying dream, aspiration or goal.

          </p>
        </section>
        <h1 className="text-4xl font-bold text-[#121212] mb-8">
        Why Invest with us
        </h1>
        <section className="">
          <div className="shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] transition-[0.3s] w-3/5 rounded-[5px] hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)]">
            <div className="px-8 py-8">
              <h4 className="text-4xl font-bold text-[#121212] mb-8"><b>Our business will be built on three pillars</b></h4>
              <p className="text-xl font-medium text-[#555555] leading-8">Outside-in View
                Investor at the heart of every single decision.
                Communicate in his language, not in ours.</p>
            </div>
          </div>

          <div className="shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] transition-[0.3s] w-3/5 rounded-[5px] hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)]">
            <div className="px-8 py-8">
              <h4 className="text-4xl font-bold text-[#121212] mb-8"><b>Enduring Wealth Creation</b></h4>
              <p className="text-xl font-medium text-[#555555] leading-8">Play a serious and credible role in investor's money basket.
                Encourage investors to build a long-term perspective of the mutual fund category</p>
            </div>
          </div>

          <div className="shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] transition-[0.3s] w-3/5 rounded-[5px] hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)]">
            <div className="px-8 py-8">
              <h4 className="text-4xl font-bold text-[#121212] mb-8"><b>Long-term Relationships</b></h4>
              <p className="text-xl font-medium text-[#555555] leading-8">Leverage the equity of the 'Axis' brand
                Aim at building relationships rather than being transactional.</p>
            </div>
          </div>
        </section>
      </div>
    </div>




  );
}
