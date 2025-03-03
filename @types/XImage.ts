export default interface XImage {
	//код файла в системе
	fileId: string;
	//ошибки, которые возникли при загрузке или пост-процессинге файла (например. сжатия картики)
	fileError: string;
	//адрес загруженного файла (если картинка, то в оригинальном качестве)
	url: string;
	//оригинальное название файла (которые было при загрузке)
	originalName: string;
	//тип файла
	MimeType: string;
	//путь к "среднему" изображению (актуально только для картинок, у которых был включен режим уменьшения размеров)
	surl: string;
	//пусть к "превью" изображению (актуально только для картинок, у которых был включен режим уменьшения размеров)
	murl: string;
}
