async function serve(context) {
    try {
        // Asynchronous operations using await
        const result = await someAsyncOperation();

        // Process the result
        return result;
    } catch (error) {
        // Handle any errors
        console.error(error);
        throw error;
    }
}
