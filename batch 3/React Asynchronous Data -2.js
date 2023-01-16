const getAsyncStories = () =>
new Promise((resolve) =>
resolve({ data: { stories: initialStories } })
);