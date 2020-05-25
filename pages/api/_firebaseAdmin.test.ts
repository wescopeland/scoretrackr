import * as admin from "firebase-admin";
import { firebaseAdminApp } from "./_firebaseAdmin";

describe("Util: firebaseAdminApp", () => {
  it("exists", () => {
    // Assert
    expect(firebaseAdminApp).toBeDefined();
  });

  it("does not initialize twice", () => {
    // Act
    firebaseAdminApp;
    firebaseAdminApp;

    // Assert
    expect(admin.apps.length).toEqual(1);
  });
});
