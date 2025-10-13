import { registerOTel } from "@vercel/otel";

export function register() {
  registerOTel("back-end");
}
