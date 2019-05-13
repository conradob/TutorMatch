const { prisma } = require('../src/generated/prisma-client');

async function main() {
  await prisma.createTutor({
    name: 'Alice',
    description: 'Alice tutor from seed',
  });
}

main().catch(e => console.error(e));
