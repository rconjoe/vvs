import { expect, test } from "bun:test";
import { encoding_for_model } from "tiktoken";

const enc = encoding_for_model("gpt-4");

test("tiktoken", () => {
  expect(
    new TextDecoder().decode(enc.decode(enc.encode("you motherfucker!!!"))) ===
    "you motherfucker!!!",
  );
});
