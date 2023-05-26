import { AppState } from "@/store/store";
import { useSelector } from "react-redux";
import Accordion from "../Accordion";
import Section from "../Section";

export default function Faq() {
	const header = (
		<h2>
			<span className="text-primary">Часто</span> задаваемые вопросы
		</h2>
	);

	const terms = useSelector((state: AppState) => state.rentTerms)?.faq;

	return (
		<Section header={header} slogan="">
			<div className="flex flex-col gap-5">
				<Accordion header={terms?.cardFirstQuestionTitle}>{terms?.cardFirstQuestionText}</Accordion>
				<Accordion header={terms?.cardSecondQuestionTitle}>{terms?.cardSecondQuestionText}</Accordion>
				<Accordion header={terms?.cardThirdQuestionTitle}>{terms?.cardThirdQuestionText}</Accordion>
				<Accordion header={terms?.cardFourthQuestionTitle}>{terms?.cardFourthQuestionText}</Accordion>
			</div>
		</Section>
	);
}
