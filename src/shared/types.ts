export interface UseModalResult {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}
export interface GetTokenResult {
    access_token: string;
    refresh_token: string;
    user: User;
}

export interface User {
    id: string;
    created_at: string;
    updated_at: string;
    telegram_id: number;
    first_name: string;
    last_name: string | null;
    middle_name: string | null;
    username: string;
    language_code: string;
    allows_write_to_pm: boolean;
    referer_user_id: string | null;
}
