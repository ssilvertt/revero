import { createStore, createEvent, createEffect } from 'effector';
import { User } from '../../shared/types';

// Events
export const resetUser = createEvent('reset user');
export const updateUser = createEvent<User>('update user');

// Effects
export const fetchUserFx = createEffect<void, User, Error>('fetch user');

// Stores
export const $user = createStore<User | null>(null, { name: 'user store' })
    .on(updateUser, (_, user) => {
        console.log('Updating user store with:', user);
        return user;
    })
    .on(fetchUserFx.doneData, (_, user) => user)
    .reset(resetUser);

export const $isLoading = createStore(false, { name: 'user loading store' })
    .on(fetchUserFx.pending, (_, pending) => pending);

$user.watch((user) => {
    console.log('User store updated:', user);
});