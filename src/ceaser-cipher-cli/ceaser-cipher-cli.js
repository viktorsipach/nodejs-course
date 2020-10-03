const { program } = require('commander');
const fs = require('fs');

const cipher = str => str.toUpperCase();

program.storeOptionsAsProperties(false);

program
  .requiredOption('-s, --shift <type>', ' a shift')
  .option('-i, --input <type>', 'an input file')
  .option('-o, --output <type>', 'an output file')
  .requiredOption('-a, --action  <type>', 'an action encode/decode');

program.parse(process.argv);

if (program.opts().input === undefined && program.opts().output === undefined) {
  process.stdout.write('Input: ');
  process.stdout.write(' >>>> ');
  process.stdin.on('data', data => {
    process.stdout.write(cipher(data.toString()));
    process.stdout.write('Input: ');
    process.stdout.write(' >>>> ');
  });
} else if (program.opts().input === undefined && program.opts().output) {
  process.stdout.write('Input: ');
  process.stdout.write(' >>>> ');
  process.stdin.on('data', data => {
    fs.appendFile(
      `src/ceaser-cipher-cli/${program.opts().output}`,
      cipher(data.toString()),
      err => {
        if (err) console.error(err);
      }
    );
    process.stdout.write('Successes! \n');
    process.stdout.write('Input: ');
    process.stdout.write(' >>>> ');
  });
} else if (program.opts().output === undefined && program.opts().input) {
  const readStream = fs.createReadStream(
    `src/ceaser-cipher-cli/${program.opts().input}`,
    'utf8'
  );
  readStream.on('data', data => {
    process.stdout.write(cipher(data.toString()));
  });
} else {
  const readStream = fs.createReadStream(
    `src/ceaser-cipher-cli/${program.opts().input}`,
    'utf8'
  );
  readStream.on('data', data => {
    fs.appendFile(
      `src/ceaser-cipher-cli/${program.opts().output}`,
      cipher(data.toString()),
      err => {
        if (err) console.error(err);
      },
      console.log('Successes!')
    );
  });
}
