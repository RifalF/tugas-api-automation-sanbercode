import request from "supertest";
import { expect } from "chai";

const baseUrl = "https://kasir-api.belajarqa.com";

describe("Create Request Login to Get Access Token for Authorization", () => {
    it("Positive - Login Success", async () => {
        const account = {
            "email": "vall@qa.com",
            "password": "test123"
        }

        //send request
        const response = await request (baseUrl)
            .post("/authentications") //endpoint
            .send(account) //request body
        
        expect((await response).status).to.equal(201)
        console.log((await response).body)
    })
})