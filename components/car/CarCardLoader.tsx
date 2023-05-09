export default function CarCardLoader() {
	return (
		<div className="w-[380px] h-[424px] rounded-2xl bg-darkgray p-4 flex flex-col">
			<div className="rounded-2xl h-[215px] relative mb-4 bg-background02 animate-pulse"></div>
			<div className="animate-pulse">
				<p className="rounded-2xl bg-background02 h-4 w-28 mb-5"></p>
				<p className="rounded-2xl bg-background02 h-7 w-40 mb-5"></p>
				<p className="rounded-2xl bg-background02 h-4 w-64 mb-5"></p>
			</div>
			<div className="flex flex-row justify-between items-center">
				<div className="rounded-2xl bg-background02 h-14 flex text-center px-4 min-w-[150px]"></div>
				<div className="rounded-2xl bg-background02 h-7 w-28 mx-7"></div>
			</div>
		</div>
	);
}
