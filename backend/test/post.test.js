const mocha = require("mocha");
const { expect } = require("chai");
const request = require("supertest");
const app = require("../src/index");
const { PostModel } = require("../src/models/Post");

describe("Post", () => {
  describe("GET posts", () => {
    it("should return a list of posts", (done) => {
      request(app)
        .get("/api/v1/posts")
        .expect(200)
        .then((res) => {
          const response = res._body;

          expect(response).to.be.a("array").of.length(100);

          done();
        })
        .catch((err) => done(err));
    });
  });

  describe("GET post by id", () => {
    it("should return a single a post", (done) => {
      request(app)
        .get("/api/v1/posts/1")
        .expect(200)
        .then((res) => {
          const response = res._body;

          expect(response).to.be.a(PostModel);

          done();
        })
        .catch((err) => done(err));
    });
  });
});
