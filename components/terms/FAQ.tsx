import Accordion from "../Accordion";
import Section from "../Section";

export default function Faq() {
  const header = (
    <h2>
      <span className="text-primary">Часто</span> задаваемые вопросы
    </h2>
  );

  return (
    <Section header={header} slogan="">
      <div className="flex flex-col gap-5">
        <Accordion header="Условия страхования автомобилей"></Accordion>
        <Accordion header="Есть ли ограничения по территории эксплуатации?">
          • Отправляйтесь в путешествие любой дальности – на тусовочные выходные в Новосибирск, в
          горнолыжный трип по Шерегешу или туристический маршрут на Байкал - выбирать вам! <br />•
          До 1000 км без согласования
          <br />• Более 1000 км по согласованию <br />• Нельзя выезжать за пределы РФ
        </Accordion>
        <Accordion header="Требуется ли залог?"></Accordion>
        <Accordion header="Можно ли вернуть автомобиль досрочно?"></Accordion>
      </div>
    </Section>
  );
}
