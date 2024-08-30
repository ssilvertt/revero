import { Header } from '../components/Header.tsx';

export function Main() {
  return (
    <>
      <Header />
      
      <div className="flex flex-col h-full relative w-full">
        <div className="absolute left-0 right-0 top-0 h-2 -mt-2 bg-active opacity-20 blur-sm rounded-t-[10px]"></div>
        <div className="border-t-2 border-active rounded-t-2xl pt-6"></div>
        <div className="mx-2">
          <div
            className="w-full h-[457px] mx-auto border-t-[2.5px] border-[#282a35] rounded-[25px] relative overflow-hidden"
            style={{
              backgroundColor: '#1c2133',
              backgroundImage: 'radial-gradient(circle at bottom right, var(--color-white), transparent 70%)',
              backgroundBlendMode: 'screen'
            }}
          ></div>
        </div>
      </div>
    </>
  );
}