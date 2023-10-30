export type Coffee = {
    id: number;
    name: string;
    description: string;
    longDescription: string;
    tags: string[];
    prices: {
        small: number;
        medium: number;
        large: number;
    };
    imageUrl: string;
};
