import request from "supertest";
import { expect } from "chai";

const baseUrl = "https://kasir-api.belajarqa.com";

describe("Create Request Registration", () => {
    it("Positive - Store Registration Success", async () => {
        const store = {
            "name": "VallTech",
            "email": "vall@qa.com",
            "password": "test123"
        }

        //send request
        const response = await request (baseUrl)
            .post("/registration") //endpoint
            .send(store) //request body
        
        expect((await response).status).to.equal(201)
        console.log((await response).body)

    })
})