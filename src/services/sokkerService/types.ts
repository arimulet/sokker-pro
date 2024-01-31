export enum SokkerAuthenticationReason {
  OK = 0,
  BAD_PASSWORD = 1,
  NO_TEAM = 3,
  USER_BANNED = 4,
  USER_BANKRUPT = 5,
  USER_BLACKLISTED = 6,
}

export type SokkerAuthentication = {
  authenticated: boolean;
  team_id?: number;
  reason: SokkerAuthenticationReason;
};
