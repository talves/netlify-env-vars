const build_env = `${process.env.BUILD_ENV}`;
console.log("====================================");
console.log(`NODE_ENV: '${process.env.NODE_ENV}'`);
console.log(`BUILD_ENV: '${build_env}'`);
console.log("====================================");
console.log(JSON.stringify(process.env, null, 2));
