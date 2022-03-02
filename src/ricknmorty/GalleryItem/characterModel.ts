export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: Origin;
    location: Location;
    image: string;
}

interface Location {
    name: string;
}

interface Origin {
    name: string;
}