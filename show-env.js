const build_env = `${process.env.BUILD_ENV}`;
console.log("====================================");
console.log(`Build env: '${build_env}'`);
console.log("====================================");
console.log(JSON.stringify(process.env, null, 2));
