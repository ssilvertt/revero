import { createStore, createEvent, createEffect } from 'effector';
import { ProfileResponse } from '../../shared/types';
import { profileApi } from '../../api';


export const fetchProfileFx = createEffect(async () => {
    const profile = await profileApi.getProfile();
    return profile;
});

export const updateProfile = createEvent<ProfileResponse>();
export const resetProfile = createEvent();

export const $profile = createStore<ProfileResponse | null>(null, { name: 'profile store' })
    .on(fetchProfileFx.doneData, (_, profile) => profile)
    .on(updateProfile, (_, profile) => profile)
    .reset(resetProfile);

export const $user = $profile.map(profile => profile?.user ?? null);
export const $balance = $profile.map(profile => profile?.balance ?? '0');
export const $isAdmin = $profile.map(profile => profile?.is_admin ?? false);

export const $isProfileLoading = createStore(false, { name: 'profile loading store' })
    .on(fetchProfileFx.pending, (_, pending) => pending);
