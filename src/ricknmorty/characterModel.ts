export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    location: Location;
    image: string;
}

interface Location {
    name: string;
}