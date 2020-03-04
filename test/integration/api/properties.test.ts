import request from "supertest";
import sinon from "sinon";
import axios from "axios";
import faker from "faker";
import App from "../../../src/app";
import {Application} from "express";
import {BookingDTO} from "../../../src/infrastructure/mappers/booking.mapper";
import hereHotelsResponse from "../../__mocks__/here.hotels.response";


describe("Properties API", () => {
    let sandbox: sinon.SinonSandbox;
    let app: Application;
    beforeAll(async () => {
        sandbox = sinon.createSandbox();
        sandbox
            .stub(axios, "get")
            .withArgs(sinon.match(new RegExp("/browse")))
            .resolves({
                status: 200,
                data: hereHotelsResponse
            });
        app = await App.getApplication();
    });
    afterAll(async () => {

    });
    describe("Returns the property around Lat/Lon", () => {
        test("should returns the property around Lat/Lon", async () => {
            const at = "40.74917,-73.98529";
            const result = await request(app).get(`/api/properties?at=${at}`);
            expect(result.status).toEqual(200);
            expect(result.body).toBeInstanceOf(Array);
            result.body.forEach((e: any) => {
                expect(e.title).toBeDefined();
                expect(e.propertyId).toBeDefined();
            });
        });
    });
    describe("Creates a booking for a property", () => {
        const propertyId = "840d408k-320fd7ff8b35064a13d517ea5cba6d20";
        test("should create booking", async () => {
            const result = await request(app).post(`/api/bookings`).send({
                propertyId,
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                email: faker.internet.email(),
                startDate: new Date().toISOString(),
                endDate: new Date().toISOString(),
            });
            expect(result.status).toEqual(201);
        });
        test("should throw validation error", async () => {
            const result = await request(app).post(`/api/bookings`).send({
                // propertyId,
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                email: faker.internet.email(),
                startDate: new Date().toISOString(),
                endDate: new Date().toISOString(),
            });
            expect(result.status).toEqual(400);
            console.log(result.body);
            expect(result.body.error).toEqual("\"propertyId\" is required");
        });
    });
    describe("Returns the bookings for a property", () => {
        const propertyId = "840dr5ru-b80d8605986e40cea665cba18afb7894";
        test("should returns the bookings for a property", async () => {
            const result = await request(app).get(`/api/properties/${propertyId}/bookings`);
            expect(result.status).toEqual(200);
            expect(result.body).toBeInstanceOf(Array);
            result.body.forEach((e: BookingDTO) => {
                expect(e.id).toEqual(0);
            });
        });
    });
});
