const options = require('./options');
const fs = require('fs');

const cipher = require('./cipher');

const run = args => {
  if (args.input === undefined && args.output === undefined) {
    process.stdout.write('Input: ');
    process.stdout.write(' >>>> ');
    process.stdin.on('data', data => {
      const result = cipher(args.action.toString(), data.toString());
      if (result === 'Invalid action!') {
        throw new Error('Invalid action!');
      } else {
        process.stdout.write(result);
        process.stdout.write('Input: ');
        process.stdout.write(' >>>> ');
      }
    });
  } else if (args.input === undefined && args.output) {
    process.stdout.write('Input: ');
    process.stdout.write(' >>>> ');
    process.stdin.on('data', data => {
      const result = cipher(args.action.toString(), data.toString());
      if (result === 'Invalid action!') {
        throw new Error('Invalid action!');
      } else {
        fs.appendFile(
          `src/ceaser-cipher-cli/${args.output}`,
          cipher(args.action.toString(), data.toString()),
          err => {
            if (err) console.error(err);
          }
        );
        process.stdout.write('Successes! \n');
        process.stdout.write('Input: ');
        process.stdout.write(' >>>> ');
      }
    });
  } else if (args.output === undefined && args.input) {
    const readStream = fs.createReadStream(
      `src/ceaser-cipher-cli/${args.input}`,
      'utf8'
    );
    readStream.on('data', data => {
      const result = cipher(args.action.toString(), data.toString());
      if (result === 'Invalid action!') {
        throw new Error('Invalid action!');
      } else {
        process.stdout.write(result);
      }
    });
  } else {
    const readStream = fs.createReadStream(
      `src/ceaser-cipher-cli/${args.input}`,
      'utf8'
    );
    readStream.on('data', data => {
      const result = cipher(args.action.toString(), data.toString());
      if (result === 'Invalid action!') {
        throw new Error('Invalid action!');
      } else {
        fs.appendFile(
          `src/ceaser-cipher-cli/${args.output}`,
          result,
          err => {
            if (err) console.error(err);
          },
          console.log('Successes!')
        );
      }
    });
  }
};

run(options);
