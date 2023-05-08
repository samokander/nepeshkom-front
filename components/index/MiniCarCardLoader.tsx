export default function MiniCarCardLoader() {
	return (
		<div className="flex flex-col gap-2 animate-pulse bg-background border-background border-solid">
			<div className="rounded-2xl w-[280px] h-[178px] relative bg-darkgray"></div>
			<div className="rounded-2xl bg-darkgray h-6 w-40 mb-5"></div>
			<div className="rounded-2xl bg-darkgray h-4 w-28 mb-5"></div>
		</div>
	);
}
