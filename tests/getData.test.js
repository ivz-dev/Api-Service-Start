/* eslint-disable no-unused-vars, no-undef */
const request = require("supertest");
const server = require("../index");

describe("GET USER", () => {
  it("should return a 200 when user data found", (done) => {
    request(server)
      .get("/data/1")
      .expect(200)
      .end((err) => {
        if (err) done(err);
        done();
      });
  });

  it("should return correct object when user data found", (done) => {
    request(server)
      .get("/data/1")
      .expect(200)
      .expect((res) => {
        if (res.body.data.name !== "Ihor" || res.body.data.email !== "ihor@gmail.com") {
          return done("Invalid object!");
        }
        return done();
      })
      .end((err) => {
        if (err) done(err);
        done();
      });
  });
});
