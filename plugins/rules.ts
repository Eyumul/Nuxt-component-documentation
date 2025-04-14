import { defineRule, configure } from "vee-validate";
import {
  required,
  email,
  integer,
  image,
  size,
  alpha_dash,
  alpha_num,
  alpha_spaces,
  min,
  max,
  confirmed,
} from "@vee-validate/rules";
import type { FieldValidationMetaInfo } from "~/types/validation";

export default defineNuxtPlugin({});

defineRule("required", required);
defineRule("email", email);
defineRule("alphabetWithNum", alpha_num);
defineRule("alphabetWithSpace", alpha_spaces);
defineRule("alphabetWithDash", alpha_dash);
defineRule("integer", integer);
defineRule("image", image);
defineRule("size", size);
defineRule("min", min);
defineRule("max", max);
defineRule("confirmed", confirmed);

configure({
  validateOnInput: true,
  generateMessage: (context: FieldValidationMetaInfo) => {
    const messages: Record<string, string> = {
      required: `This field is required.`,
      email: `${context.field} must be a valid email address.`,
      size: `${context.field} must be less than 1.5MB.`,
      image: `This field must be an image.`,
      integer: `${context.field} must be an integer.`,
      alpha_dash: `${context.field} must contain only alphabets and dashes.`,
      alpha_num: `${context.field} must contain only alphabets and numbers.`,
      alpha_spaces: `${context.field} must contain only alphabets and spaces.`,
      min: `${context.field} must be at least ${context.rule?.params} characters.`,
      max: `${context.field} must be at most ${context.rule?.params} characters.`,
      confirmed: `The passwords don't match.`,
    };
    
    const ruleName = context.rule?.name as keyof typeof messages;
    return ruleName && messages[ruleName]
      ? messages[ruleName]
      : `The field ${context.field} is invalid.`;
  },
});