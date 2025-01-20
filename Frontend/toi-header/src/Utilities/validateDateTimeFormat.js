export default function isValidDateTime(datetimeString) {
  try {
    // Check if the input is a string
    if (typeof datetimeString !== "string") {
      throw new Error("Input is not a string");
    }

    // Parse the datetime string
    const date = new Date(datetimeString);

    // Check if the parsed Date object is valid
    if (isNaN(date.getTime())) {
      throw new Error("Invalid datetime format");
    }

    // Return true if the input is valid
    return true;
  } catch (error) {
    console.error("DateTime Validation Error:", error.message);
    return false;
  }
}
