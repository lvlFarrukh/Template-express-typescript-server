interface LoginModal {
    id: string,
    name: string,
    age: number
}

export const LoginFetch = () => {
    const user: LoginModal = {
        id: "12321321231",
        name: "Farrukh",
        age: 25
    }

    return user;
}