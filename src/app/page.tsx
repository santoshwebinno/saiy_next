import Sidebar from '@/components/ui/Sidebar';
import StatsCard from '../components/ui/StatsCard';
import DatePickerWithRange from '../components/ui/DatePickerWithRange';
import HeaderBar from "@/components/ui/HeaderBar";

export default function Home() {
  return (
    <div className="flex font-sans">
      <Sidebar />

      <main className="flex-1 p-8">
        <HeaderBar />

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h1
              className="text-[22px] text-custom-blue font-bold leading-[26.25px] text-left decoration-skip-ink-none mb-5"
              style={{ fontFamily: "SF Pro, sans-serif" }}
            >
              Hello, David!
            </h1>

            <div className="grid grid-cols-2 gap-6">
              <StatsCard title="Active Users" value="6,321" imageSrc="/images/userAcc.svg" />

              <StatsCard title="" value="" items={[
                { label: "Android", value: "1,232", imageSrc: "/images/android.svg" },
                { label: "Browser", value: "2,153", imageSrc: "/images/browser.svg" },
                { label: "iOS", value: "3,678", imageSrc: "/images/ios.svg" },
              ]}
              />
            </div>
          </div>

          <div className=" w-2/4 m-auto">
            <p
              className="font-bold text-[16px] leading-[19.09px] text-left decoration-skip-ink-none mb-5"
              style={{ fontFamily: 'SF Pro, sans-serif' }}
            >
              Statistics
            </p>

            <div className="text-white border border-gray-300 rounded-lg shadow-md col-span-2">
              <div className="bg-custom-blue p-3">
                <h3 className="text-lg">All Activity</h3>
                <p className="text-5xl font-bold mt-2 ">7,431</p>
              </div>
              <div className="p-3">
                {/* <p className="text-sm mt-1 text-black">1.1.2024 - 31.12.2024</p> */}
                <DatePickerWithRange />

                <ul className="mt-4 space-y-2 text-black">
                  <li className="border-b border-gray-300 p-3 flex justify-between" > <span>Rewrite :</span> <a href="#" className="text-cyan-400">2,325</a></li>
                  <li className="border-b border-gray-300 p-3 flex justify-between"><span>Translate :</span> <a href="#" className="text-blue-400">2,325</a></li>
                  <li className="p-3 flex justify-between"> <span>Create :</span> <a href="#" className="text-green-400">710</a></li>
                </ul>

                <ul className="mt-8  text-black">
                  <li className="p-2 flex justify-between"><span>Instagram </span> <a href="#" className="text-Oxford Blue-50 ">150</a></li>
                  <li className="p-2 flex justify-between"><span>Newsletter </span> <a href="#" className="text-Oxford Blue-500 ">73</a></li>
                  <li className="p-2 flex justify-between"><span>Linkedin </span> <a href="#" className="text-Oxford Blue-500 ">66</a></li>
                  <li className="p-2 flex justify-between"><span>Facebook </span> <a href="#" className="text-Oxford Blue-500 ">12</a></li>
                  <li className="p-2 flex justify-between"><span>X </span> <a href="#" className="text-Oxford Blue-500 ">3</a></li>
                  <li className="p-2 flex justify-between"><span>Blog Article</span>  <a href="#" className="text-Oxford Blue-500 ">1</a></li>
                </ul>

              </div>
            </div>

          </div>

        </div>

      </main>
    </div>

  );
}
