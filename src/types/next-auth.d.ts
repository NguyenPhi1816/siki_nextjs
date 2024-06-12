import "next-auth";

declare module "next-auth" {
  /**
   * Extends the built-in session/user types with custom fields.
   */
  interface User {
    accessToken: string;
    refreshToken: string;
  }

  interface DefaultJWT {
    accessToken: string;
    refreshToken: string;
  }
}
