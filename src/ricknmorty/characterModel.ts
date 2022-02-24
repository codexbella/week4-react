export interface Character {
    name: string;
    status: string;
    species: string;
    location: Location;
    image: string;
}

interface Location {
    name: string;
}

export interface ResponseBody {
    results: Array<Character>;
}