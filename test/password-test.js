const chai = require("chai");

const chaiHttp = require("chai-http");
const server = require("../server");
const should = chai.should();
chai.use(chaiHttp);

describe("API /", () => {
  it("it should return API OK", (done) => {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.be.equal("API OK");
        done();
      });
  });
});

describe("/password/isValid", function () {
  it("it should return false for an out-of-rule password", function (done) {
    chai
      .request(server)
      .get("/password/isValid")
      .send({ password: "2Tes1!Das" })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.property("isValid").eql(false);
        done();
      });
  });
  it("it should return true for a correct password", function (done) {
    chai
      .request(server)
      .get("/password/isValid")
      .send({ password: "AcZp7*bar" })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("isValid").eql(true);
        done();
      });
  });
});
