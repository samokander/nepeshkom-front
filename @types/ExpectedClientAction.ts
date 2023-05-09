export default interface ExpectedClientAction {
	//дата ожидаемого события
	EventTime: string;
	//текствое представление значения справочника
	Value: string;
	//числовой код значения справочника
	ValueId: number;
	//строковый код значения спарвочника
	ValueCode: string;
	//цвет значения справочника
	ColorCode: string;
	//код справочника
	DictionaryId: number;
	//напименование справочника
	DictionaryName: string;
	//строковый код справочника
	DictionaryCode: string;
	//коментарий пользователя
	Comment: string;
	//код пользователя
	UserId: number;
	//имя пользователя
	UserName: string;
	//время добавления ожидаемого действиия
	AddingTime: string;
}
