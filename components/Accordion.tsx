import { PropsWithChildren, useState } from "react";
import MoreIcon from "./icons/MoreIcon";

export default function Accordion(props: accordionProps & PropsWithChildren) {
	const [visible, setVisible] = useState(false);

	return (
		<div className="w-full rounded-3xl bg-darkgray flex flex-col border border-halfblack ">
			<div
				className="w-full h-[100px] rounded-3xl bg-darkgray text-white font-semibold border border-halfblack text-3xl p-8 flex items-center"
				onClick={() => setVisible(!visible)}>
				<div className="flex flex-row justify-between items-center w-full">
					<h3>{props.header}</h3>
					<MoreIcon visible={visible} setVisible={setVisible} />
				</div>
			</div>
			{visible && <p className="block m-8 text-halfblack">{props.children}</p>}
		</div>
	);
}
