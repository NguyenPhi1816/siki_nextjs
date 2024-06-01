import "next-auth";

declare module "next-auth" {
  /**
   * Extends the built-in session/user types with custom fields.
   */
  interface User {
    address: string;
    phoneNumber: string;
    dateOfBirth: string;
    accessToken: string;
    refreshToken: string;
  }
}
