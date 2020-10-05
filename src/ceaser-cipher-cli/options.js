const { program } = require('commander');

const getOptions = () => {
  program.storeOptionsAsProperties(false);

  program
    .requiredOption('-s, --shift <type>', ' a shift')
    .option('-i, --input <type>', 'an input file')
    .option('-o, --output <type>', 'an output file')
    .requiredOption('-a, --action  <type>', 'an action encode/decode');

  program.parse(process.argv);

  const options = program.opts();

  return options;
};

module.exports = getOptions();
