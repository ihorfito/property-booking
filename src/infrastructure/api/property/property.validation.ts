"use strict";
import Joi from "@hapi/joi";
import {ValidationError} from "../errors/validation.error";

export namespace PropertyValidation {
    export class RequestValidator {
        static propertyId(id: any) {
            const result = Joi.string().required().validate(id);
            if (result.error) {
                throw new ValidationError(result.error.message);
            }
            return result.value;
        }

        static coordinates(at: string) {
            const result = Joi.string().regex(/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/).required().validate(at);
            if (result.error) {
                throw new ValidationError(result.error.message);
            }
            return result.value;
        }

        static booking(bookingParams: any) {
            const result = Joi.object({
                propertyId: Joi.string().required(),
                firstName: Joi.string().required(),
                lastName: Joi.string().required(),
                email: Joi.string().email().required(),
                startDate: Joi.string().isoDate().required(),
                endDate: Joi.string().isoDate().required(),
            }).validate(bookingParams);
            if (result.error) {
                throw new ValidationError(result.error.message);
            }
            return result.value;
        }
    }
}
