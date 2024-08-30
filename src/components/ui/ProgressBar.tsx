export function ProgressBar({ progress }: { progress: number }) {
    return (
	    <div className="relative w-full h-2">
		    <div
			    className="absolute inset-0 rounded-[44.31px] bg-gradient-to-b from-[#4200ff] to-[#3891ff] opacity-57 blur-[24.37px]"
			    style={{ width: `${progress}%` }}
		    ></div>
		    
		    <div className="relative w-full h-full rounded-[44.31px] bg-[#212121] overflow-hidden">
			    <div
				    className="h-full rounded-[44.31px] bg-gradient-to-b from-[#4200ff] to-[#3891ff]"
				    style={{ width: `${progress}%` }}
			    ></div>
		    </div>
	    </div>
    );
}
