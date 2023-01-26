export interface MenuItem {
	title: string;
	href: string;
	description?: string;
	children?: MenuItem[];
}
