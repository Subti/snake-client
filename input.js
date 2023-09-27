let connection;

const handleUserInput = function (data) {
  if (data === 'w') {
    connection.write("Move: up");
  } else if (data === 'a') {
    connection.write("Move: left");
  } else if (data === 's') {
    connection.write("Move: down");
  } else if (data === 'd') {
    connection.write("Move: right");
  } else if (data === 'g') {
    connection.write("Say: HEY ITS ME GOKU");
  } else if (data === 'f') {
    connection.write("Say: Let's fight!");
  } else if (data === 'r') {
    connection.write("Uh oh...");
  } else if (data === '\u0003') {
    process.exit();
  }
}

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
}

module.exports = {
  setupInput
}