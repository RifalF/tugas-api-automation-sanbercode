import request from "supertest";
import { expect } from "chai";
import { assert } from "chai";

const baseUrl = "https://kasir-api.belajarqa.com";

describe("CRUD User kasirAJa", () =>{
    it('Positive - Success Update User', async () =>{
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFiODRkODBlLTllZWEtNGIwNy1hNGMzLTIzNDcxYWY1OGRiZiIsImNvbXBhbnlJZCI6IjAyNDgzMmM5LTAzYWItNGU1Zi1iNjU1LTBiNzA1ZWVjMDE4MiIsImlhdCI6MTcwODg3MzcwNH0.HBU3NIWeoDZzaBCKb4xiuPGb--hW31ZK3WvbcMBA7aM"
    const userId = "ff9c6b20-dc03-4fe0-b072-7f3f7b9d6acf"
    const updateCashier1 = {
        "name": "firstCashierUpdated",
        "email": "cashier1@qa.com"
    }

    //send request
    const response = await request (baseUrl)
        .put(`/users/${userId}`)
        .set('Authorization',`bearer ${token}`)
        .send(updateCashier1) //request body
        

        expect((await response).status).to.equal(200)
        assert.exists(response)
        console.log((await response).body)
    })
})