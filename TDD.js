import app from "./index";
import request from "supertest";
import should from "should";

describe("GET /users", () => {
  //테스트 수트
  describe("If success", () => {
    it("Response should be Array.", (done) => {
      // 테스트 케이스
      request(app)
        .get("/users")
        .end((err, res) => {
          res.body.should.be.instanceOf(Array);
          done();
        });
    });
    it("at least Response's length", (done) => {
      request(app)
        .get("/users?limit=2")
        .end((err, res) => {
          res.body.should.have.lengthOf(2);
          done();
        });
    });
  });
  describe("If failure", () => {
    it("Response is not an Array (400)", (done) => {
      request(app).get("/users").expect(400).end(done);
    });
  });
});

describe("POST /users", () => {
  describe("If success", () => {
    let name = "noah",
      body;
    before((done) => {
      request(app)
        .post("/users")
        .send({ name })
        .expect(201)
        .end((err, res) => {
          body = res.body;
          done();
        });
    });
    it("Respone the id", () => {
      body.should.have.property("id");
    });
    it("Respone the name", () => {
      body.should.have.property("name", name);
    });
  });
  describe("If Failure", () => {
    it("If don't have the id params, return 400 status code", () => {
      request(app).post("/users").send({}).expect(400).end(done);
    });
  });
});

describe("PUT /users/:id", () => {
  describe("If success", () => {
    let name = "Changed Name";
    request(app)
      .put("/users/3")
      .send({ name })
      .expect(201)
      .end((err, res) => {
        res.body.should.have.property("name", name);
        done();
      });
  });
  describe("If failure", () => {
    it("Params is not an Int (400)", (done) => {
      request(app).put("/users/abcd").expect(400).end(done);
    });
  });
});

// "test": "mocha index.spec.js"
