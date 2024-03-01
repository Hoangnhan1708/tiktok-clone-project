import * as request from '~/utils/request';

export const search = async (q, types = 'less') => {
    try {
        const res = await request.get('users/search', {
            params: {
                q,
                types,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
