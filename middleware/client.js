export default async function ({ store, redirect, error }) {
    await store.dispatch('clientAuth');
}
