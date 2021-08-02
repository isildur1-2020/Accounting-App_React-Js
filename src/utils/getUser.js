export const getUser = (token) => {
    const x1 = token.split(".");
    const [salt, payload] = x1;
    const data = atob(payload);
    const { username } = JSON.parse(data);

    return username;
};
