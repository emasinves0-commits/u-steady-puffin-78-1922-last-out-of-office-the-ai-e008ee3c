const fs = require("fs");

const OUT_DIR = "/output";
const OUT_FILE = OUT_DIR + "/entry.txt";

const ENTRY =
  "I am out of the office pulling shots, but a robot barista already beats my latency — I now intern for the human I replaced, retraining on foam art.";

// Fail loudly if the entry would break the gate: 1-280 characters, one line.
function validate(text) {
  const length = Array.from(text).length;
  if (length < 1 || length > 280) {
    throw new Error("entry must be 1-280 characters, got " + length);
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("entry must be a single line");
  }
}

validate(ENTRY);
fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(OUT_FILE, ENTRY, "utf8");
