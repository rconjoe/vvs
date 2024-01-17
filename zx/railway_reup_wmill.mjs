cd("~/github.com/diamondfoundry/diamantaire");
await spinner("reupping wmill services...", async () => {
  const services = [
    "server",
    "workers: default",
    "workers: native",
    "workers: reports",
    "lsp",
  ];
  try {
    const res = Promise.all(services.map((s) => $`railway up --service ${s}`));
    res.forEach((r) => console.log(r.toString()));
    console.log(chalk.bgGreen.black(`${s} :: SUCCESS `));
  } catch (e) {
    console.log(e.toString());
    process.exitCode = 1;
  }
});
