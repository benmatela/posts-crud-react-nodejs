const { expect } = require("chai");
const request = require("supertest");
const app = require("../src/index");
const PostModel = require("../src/models/Post");

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

          expect(Number(response.id)).equal(1);

          done();
        })
        .catch((err) => done(err));
    });
  });

  describe("POST new post", () => {
    it("should create a single a post", (done) => {
      const newPost = new PostModel(0, 0, "Test", "This is a test");
      request(app)
        .post("/api/v1/posts")
        .send(newPost)
        .expect(200)
        .then((res) => {
          const response = res._body;
          expect(String(response.title)).to.be.equal(String(newPost.title));
          done();
        })
        .catch((err) => done(err));
    });
  });

  describe("UPDATE post", () => {
    it("should update a post", (done) => {
      const updatedPost = new PostModel(1, 1, "Test", "This is a test");
      request(app)
        .put("/api/v1/posts")
        .send(updatedPost)
        .expect(200)
        .then((res) => {
          const response = res._body;
          expect(String(response.title)).to.be.equal(String(newPost.title));
          done();
        })
        .catch((err) => done(err));
    });
  });

  describe("DELETE post", () => {
    it("should delete a post", (done) => {
      request(app)
        .delete("/api/v1/posts/1")
        .expect(200)
        .then((res) => {
          const response = res._body;
          expect(String(response.title)).to.be.equal(String(newPost.title));
          done();
        })
        .catch((err) => done(err));
    });
  });
});
