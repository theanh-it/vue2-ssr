function middlewarePipeline (context, middleware, index) {
    const middlewareIndex = middleware[index];
    if(!middlewareIndex) context.next(); 
    else return () => {
        const nextPipeline = middlewarePipeline(context, middleware, index + 1);
        middlewareIndex({ ...context, nextMiddleware: nextPipeline });
    }
}

export default middlewarePipeline;