const mocha = require("mocha");
const { expect } = require("chai");
const request = require("supertest");
const app = require("../src/index");

describe("Post", () => {
  describe("GET posts", () => {
    it("should return a list of posts", (done) => {
      request(app)
        .get("/api/v1/posts")
        .expect(200)
        .then((res) => {
          const response = res._body;
          expect(response).to.be.a("array");
          done();
        })
        .catch((err) => done(err));
    });
  });
});
