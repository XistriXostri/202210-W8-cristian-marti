export const consoleDebug = (info, type = 'log') => {
    try {
        if (info instanceof Error)
            throw info;
        if (process.env.NODE_ENV === 'development') {
            console[type](info);
        }
    }
    catch (error) {
        console[type](info);
    }
};
