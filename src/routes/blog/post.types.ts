export interface Post {
	metadata: {
		title: string;
		date: string;
		description: string;
		url: string;
	};
}

export interface BlogPost {
    title: string;
    description: string;
    slug: string;
    heroImage: {
        url: string;
    }
}

export interface CollectionResponse<T = any> {
    total: number;
    items: T[];
}