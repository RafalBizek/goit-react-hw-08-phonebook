export const selectLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectContactsItems = state => state.contacts.items;

export const selectIsLoading = state => state.isLoading;

export const selectError = state => state.error;
