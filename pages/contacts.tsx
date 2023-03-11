import ContactInfo from "@/components/contacts/ContactInfo";
import Layout from "@/components/Layout";
import Path from "@/components/Path";

export default function Contacts() {
	return (
		<Layout>
			<Path pageName="Контакты" pathTo="/contacts" />
			<ContactInfo />
		</Layout>
	);
}
