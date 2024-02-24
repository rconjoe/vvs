import { encoding_for_model } from "tiktoken";

const enc = encoding_for_model("gpt-4");

console.log(
  new TextDecoder().decode(enc.decode(enc.encode("you motherfucker!!!"))),
);

const tokens = enc.encode("you motherfucker!!!");

console.log(tokens.toString());

enc.free();
