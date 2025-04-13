type authProps = {
    login: string;
    password: string;
}

type findPlaceType = {
    city: string;
    query: string;
}

export type profileType = {
    login: string;
    points: string;
    achievements: {
        id: number;
        name: string;
        points: number;
        description: string;
    }[];
}

export type placeType = {
    address_comment: string;
    address_name: string;
    building_name: string;
    full_name: string;
    id: string;
    name: string;
    purpose_name: string;
    type: string;
    point: {
        lat: number;
        lon: number;
    };
}

type achievementType = {
    id: number;
    name: string;
    points: number;
    description: string;
}

export type rubricsType = {
    title: string;
    content: string;
}

interface IState {
    token: string | null;
    isAuth: boolean;
}

interface IAction {
    auth: ({ login, password }: authProps) => Promise<void>;
    register: ({ login, password }: authProps) => Promise<string>;
    logout: () => void;
    getProfile: () => Promise<profileType>;
    getRubrics: () => Promise<rubricsType[]>;
    getPlaces: ({ city, query }: findPlaceType) => Promise<placeType[]>;
    getAchievements: () => Promise<achievementType[]>;
    setAchievement: (id: string) => Promise<string>;
}

export type useStoreType = IState & IAction;