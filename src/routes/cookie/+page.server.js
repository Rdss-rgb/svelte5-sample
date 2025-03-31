export function load({ cookies }) {
    const visited = cookies.get('visited');

    // cookies.set('visited', 'false', { path: '/' });

    return {
        visited: visited === 'true'
    };
}