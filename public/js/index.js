var socket = io(); // key element to communicate between server and client

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createEmail', {
    to: 'jen@example.com',
    text: 'Hey. This is Daiki.'
  });

  socket.emit('createMessage', {
    from: 'Daiki',
    text: 'Yup, that works for me.'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newEmail', function (email) { // client listen for new email as soon as it comes in
  console.log('New email', email);
});

socket.on('newMessage', function (message) {
  console.log('New message', message);
});
