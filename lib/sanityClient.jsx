import {createClient} from '@sanity/client';

const client = createClient({
    projectId: 'k3kd7t0r',
    dataset: 'production',
    apiVersion: '2024-07-17',
    useCdn: true
});

export default client;
