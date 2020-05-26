import * as admin from "firebase-admin";
import { firebaseAdminApp } from "./_firebaseAdmin";

describe("Util: firebaseAdminApp", () => {
  it("exists", () => {
    // Assert
    expect(firebaseAdminApp).toBeDefined();
  });

  it("does not initialize twice", () => {
    // Arrange
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const myApp = firebaseAdminApp;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const myOtherApp = firebaseAdminApp;

    // Assert
    expect(firebaseAdminApp).toBeTruthy();
    expect(admin.apps.length).toEqual(1);
  });
});
