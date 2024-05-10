import { execSync } from 'child_process';

// Define a function to execute shell commands
function executeShellCommand(command) {
  console.log(`Executing command: ${command}`);
  const output = execSync(command, { stdio: 'inherit' });
//   console.log(output.toString());
}

// Define the commands to run
const commands = [
  'git checkout main',
  'npm install',
  'npx supercharge/mongodb-start@v1 --mongo-version=latest --port=27017',
  'node -e "require(\'./app.js\')"',
];

// Execute the commands
commands.forEach(command => executeShellCommand(command));
