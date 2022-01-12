const build_env = `${process.env.BUILD_ENV}`;
const node_env = `${process.env.NODE_ENV}`;
console.log("====================================");
console.log(`NODE_ENV: '${node_env}'`);
console.log(`BUILD_ENV: '${build_env}'`);
console.log("====================================");
console.log(JSON.stringify(process.env, null, 2));
