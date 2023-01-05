export const capitalizeFirstWord = (str: string): string => {
    // Check if the string is not empty
    if (str.length > 0) {
        // Get the first character of the string and uppercase it
        const firstChar = str[0].toUpperCase();
        // Get the rest of the string
        const rest = str.slice(1);
        // Return the modified string
        return firstChar + rest;
    }
    // If the string is empty, return it as is
    return str;
};

export const generateUUID = (): string => {
    // Generate a random number between 0 and 1
    const rnd = Math.random();

    // Convert the random number to a 36-character string, such as "0.1234567890123456".
    const rndStr = rnd.toString(36);

    // Remove the leading "0." from the string, and append the current time in milliseconds.
    // This creates a unique string that is highly unlikely to be generated again.
    return rndStr.substring(2) + Date.now();
};
