

export default function validateSerialId(text) {
  try {
    // Check if the input is a string
    if (typeof text !== "string") {
      throw new Error("Input is not a string");
    }

    // Check if the string is exactly 15 characters long and alphanumeric
    const isValid = /^[a-zA-Z0-9]{15}$/.test(text);

    if (!isValid) {
      throw new Error(
        "Input must be an alphanumeric string with exactly 15 characters"
      );
    }

    return true;
  } catch (error) {
    console.error("Validation Error:", error.message);
    return false;
  }
}
