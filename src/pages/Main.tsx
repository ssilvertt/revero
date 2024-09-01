import { DepositCard } from '../components/DepositCard.tsx';
import { Header } from '../components/Header.tsx';
import MobileIncomeChart from '../components/ui/Chart.tsx';
import { IncomeStats } from '../components/ui/IncomeStats.tsx';
import { StatCard } from '../components/ui/StatCard.tsx';

export function Main() {
    return (
        <>
            <Header />

            <div className="flex flex-col h-full relative w-full">
                <div className="absolute left-0 right-0 top-0 h-2 -mt-2 bg-active opacity-20 blur-sm rounded-t-[10px]"></div>
                <div className="border-t-2 border-active rounded-t-2xl pt-6"></div>
                <div className="mx-2">
                    <DepositCard />
                </div>
                <div className="border border-[rgba(255,255,255,0.2)] backdrop-blur-[18px] bg-[linear-gradient(45deg,_rgba(255,255,255,0.06)_5.646%,_rgba(94,87,87,0.15)_94.354%)] mt-8 flex justify-center pt-[11px] pb-3 bg-opacity-50">
                    <p className="text-[15px] font-bold font-proxima leading-[110%] tracking-[-2%] relative opacity-100">
                        Заработано на платформе
                    </p>
                </div>
                <div className="mx-2 mt-3">
                    <IncomeStats />
                </div>
                <div className="mx-2 my-5 pb-10">
                    <MobileIncomeChart />
                </div>
                <div className="mx-2 mt-3 flex flex-col gap-y-3">
                    <StatCard variant="invest" />
                    <StatCard variant="minimal" />
                    <StatCard variant="income" />
                </div>
                <div className="mb-20"></div>
            </div>
        </>
    );
}
